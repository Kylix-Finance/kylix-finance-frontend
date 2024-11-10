import { ApiPromise } from "@polkadot/api";
import { SubmittableResultValue } from "@polkadot/api-base/types";
import { Signer } from "@polkadot/types/types";
import {
  useActiveAccount,
  useBalance,
  useProvider,
  useSigner,
} from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
interface DisableAsCollateralAsCollateral {
  assetId: string | number;
  account?: string;
}
interface DisableAsCollateralAsMetadata {
  api: ApiPromise | undefined;
  activeAccount: string | undefined;
  signer: Signer | undefined;
}
export const useDisableAsCollateral = () => {
  const { activeAccount } = useActiveAccount();
  const { api } = useProvider();
  const { signer } = useSigner();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: DisableAsCollateralAsCollateral) =>
      disableAsCollateralAsCollateral(params, {
        api,
        signer,
        activeAccount: activeAccount?.address,
      }),
    onSuccess: (_, { assetId, account }) => {
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: account,
          assetId,
        }),
      });

      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: undefined,
        }),
      });
      queryClient.refetchQueries({
        queryKey: queryKeys.lendingPools,
      });
    },
  });
};

export const disableAsCollateralAsCollateral = async (
  { assetId, account }: DisableAsCollateralAsCollateral,
  { activeAccount, api, signer }: DisableAsCollateralAsMetadata
) => {
  const finalAccount = account ?? activeAccount;
  if (!finalAccount) {
    throw new Error(
      "No active account detected. Please ensure your wallet is connected to the app."
    );
  }
  if (!api) {
    throw new Error(
      "The API could not be accessed. Please try refreshing the page."
    );
  }
  if (!signer) {
    throw new Error(
      "Signer could not be found. Please refresh the page and try again."
    );
  }
  api.setSigner(signer);
  const extrinsic = api?.tx?.lending?.disableAsCollateral?.(assetId);
  return new Promise<{ blockNumber: string | undefined; txHash: string }>(
    (resolve, reject) => {
      extrinsic?.signAndSend(
        finalAccount,
        ({
          status,
          dispatchError,
          blockNumber,
          txHash,
        }: SubmittableResultValue) => {
          if (dispatchError) {
            if (dispatchError.isModule) {
              const decoded = api.registry.findMetaError(
                dispatchError.asModule
              );
              const { docs } = decoded;
              reject(new Error(docs.join(" ")));
            } else {
              reject(new Error(dispatchError.toString()));
            }
          } else {
            if (status.isFinalized) {
              console.info("Transaction finalized:", { blockNumber, txHash });
              resolve({
                txHash: txHash.toString(),
                blockNumber: blockNumber?.toString(),
              });
            } else {
              console.info(`Transaction status: ${status.type}`);
            }
          }
        }
      );
    }
  );
};
