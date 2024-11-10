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
interface EnableAsCollateral {
  assetId: string | number;
}
interface EnableAsCollateralMetadata {
  api: ApiPromise | undefined;
  activeAccount: string | undefined;
  signer: Signer | undefined;
  balance: bigint | undefined;
}
export const useEnableAsCollateral = () => {
  const { activeAccount } = useActiveAccount();
  const { api } = useProvider();
  const { signer } = useSigner();
  const queryClient = useQueryClient();
  const { balance } = useBalance();
  return useMutation({
    mutationFn: (params: EnableAsCollateral) =>
      enableAsCollateral(params, {
        api,
        signer,
        activeAccount: activeAccount?.address,
        balance: balance,
      }),
    onError: () => {
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: undefined,
        }),
      });
    },
    onSuccess: (_, { assetId }) => {
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
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
        queryKey: queryKeys.assetWiseSupplies(activeAccount?.address),
      });
      queryClient.refetchQueries({
        queryKey: queryKeys.lendingPools,
      });
    },
  });
};

export const enableAsCollateral = async (
  { assetId }: EnableAsCollateral,
  { activeAccount, api, signer, balance }: EnableAsCollateralMetadata
) => {
  if (!activeAccount) {
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
  const extrinsic = api?.tx?.lending?.enableAsCollateral?.(assetId);
  const estimatedGas = (
    await extrinsic?.paymentInfo?.(activeAccount)
  )?.partialFee.toBigInt();

  if (!estimatedGas) throw new Error("Unable to estimate gas fees.");
  if (balance && estimatedGas > balance) {
    throw new Error(
      "You do not have enough balance to cover the transaction fees."
    );
  }
  return new Promise<{ blockNumber: string | undefined; txHash: string }>(
    (resolve, reject) => {
      extrinsic?.signAndSend(
        activeAccount,
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
