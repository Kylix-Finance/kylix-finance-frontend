import { ApiPromise } from "@polkadot/api";
import { Signer, SubmittableResultValue } from "@polkadot/api/types";
import {
  useActiveAccount,
  useBalance,
  useProvider,
  useSigner,
} from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { useMutation } from "@tanstack/react-query";

interface BorrowProps {
  borrowValue: string;
  onConfirm?: globalThis.VoidFunction;
}
interface Props {
  asset: string | number;
}

export const useSimpleBorrow = ({ asset }: Props) => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { signer } = useSigner();
  const { balance: getBalance } = useBalance();
  return useMutation({
    mutationKey: queryKeys.supply,
    mutationFn: (params: BorrowProps) =>
      simpleBorrowTransaction(
        { asset, borrowValue: params.borrowValue, onConfirm: params.onConfirm },
        {
          api,
          signer,
          getBalance,
          activeAccount: activeAccount?.address,
        }
      ),
  });
};

export const simpleBorrowTransaction = async (
  { asset, borrowValue, onConfirm }: BorrowProps & { asset: string | number },
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
  const extrinsic = api?.tx?.lending?.borrow?.(asset, borrowValue);
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
      extrinsic
        ?.signAndSend(
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
              if (status.isReady) {
                onConfirm?.();
              }
              if (status.isInBlock) {
                console.info("Transaction inBlock:", { blockNumber, txHash });
                resolve({
                  txHash: txHash.toString(),
                  blockNumber: blockNumber?.toString(),
                });
              } else {
                console.info(`Transaction status: ${status.type}`);
              }
            }
          }
        )
        .catch(reject);
    }
  );
};
