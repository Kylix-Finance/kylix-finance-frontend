import { ApiPromise } from "@polkadot/api";
import { Signer, SubmittableResultValue } from "@polkadot/api/types";
import {
  useActiveAccount,
  useBalance,
  useProvider,
  useSigner,
} from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  borrowPoolId: string;
  borrowValue: string;
}

export const useSimpleBorrow = () => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { signer } = useSigner();
  const { balance: getBalance } = useBalance();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.supply,
    mutationFn: (params: Props) =>
      simpleBorrowTransaction(params, {
        api,
        signer,
        getBalance,
        activeAccount: activeAccount?.address,
      }),
    onSuccess: (_, { borrowPoolId }) => {
      queryClient.refetchQueries({
        queryKey: queryKeys.poolData(borrowPoolId),
      });
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: borrowPoolId,
        }),
      });
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: borrowPoolId,
        }),
      });
    },
  });
};

export const simpleBorrowTransaction = async (
  { borrowPoolId, borrowValue }: Props,
  {
    api,
    activeAccount,
    signer,
    getBalance,
  }: {
    api: ApiPromise | undefined;
    activeAccount: string | undefined;
    signer: Signer | undefined;
    getBalance: bigint | undefined;
  }
) => {
  if (!api) {
    throw new Error(
      "The API could not be accessed. Please try refreshing the page."
    );
  }
  if (!activeAccount) {
    throw new Error(
      "No active account detected. Please ensure your wallet is connected to the app."
    );
  }
  if (!signer) {
    throw new Error(
      "Signer could not be found. Please refresh the page and try again."
    );
  }

  api.setSigner(signer);
  const extrinsic = api?.tx?.lending?.borrow?.(borrowPoolId, borrowValue);
  const estimatedGas = (
    await extrinsic?.paymentInfo?.(activeAccount)
  )?.partialFee.toBigInt();

  if (!estimatedGas) throw new Error("Unable to estimate gas fees.");
  if (getBalance && estimatedGas > getBalance) {
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