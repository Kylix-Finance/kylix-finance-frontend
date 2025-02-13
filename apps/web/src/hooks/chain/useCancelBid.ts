import { ApiPromise } from "@polkadot/api";
import { SubmittableResultValue } from "@polkadot/api-base/types";
import { Signer } from "@polkadot/types/types";
import {
  useActiveAccount,
  useBalance,
  useProvider,
  useSigner,
} from "@repo/onchain-utils";
import { useMutation } from "@tanstack/react-query";
interface CancelBid {
  assetId: string | number;
  discount: number;
  txIndex: number;
  txBlockNumber: number;
}
interface CancelBidMetadata {
  api: ApiPromise | undefined;
  activeAccount: string | undefined;
  signer: Signer | undefined;
  balance: bigint | undefined;
}
export const useCancelBid = () => {
  const { activeAccount } = useActiveAccount();
  const { api } = useProvider();
  const { signer } = useSigner();
  const { balance } = useBalance();
  return useMutation({
    mutationFn: (params: CancelBid) =>
      cancelBid(params, {
        api,
        signer,
        activeAccount: activeAccount?.address,
        balance,
      }),
  });
};

export const cancelBid = async (
  { assetId, discount, txBlockNumber, txIndex }: CancelBid,
  { activeAccount, api, signer, balance }: CancelBidMetadata
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
  const extrinsic = api?.tx?.lending?.cancelBid?.(
    assetId,
    discount,
    txIndex,
    txBlockNumber
  );
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
