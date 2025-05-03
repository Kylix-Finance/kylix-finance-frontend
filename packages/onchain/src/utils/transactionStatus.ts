import { ApiPromise } from "@polkadot/api";
import { SubmittableResultValue } from "@polkadot/api-base/types";
import { TransactionStatus, UseTransactionResult } from "../types";

export const transactionStatus = ({
  api,
  resolve,
  reject,
  onBroadcast,
  onFinalized,
  onInBlock,
  onReady,
}: {
  api: ApiPromise;
  resolve: (value: UseTransactionResult) => void;
  reject: (reason: Error) => void;
} & TransactionStatus) => {
  return ({
    status,
    dispatchError,
    blockNumber,
    txHash,
  }: SubmittableResultValue) => {
    if (dispatchError) {
      if (dispatchError.isModule) {
        const decoded = api.registry.findMetaError(dispatchError.asModule);
        reject(new Error(decoded.docs.join(" ")));
      } else {
        reject(new Error(dispatchError.toString()));
      }
      return;
    }
    if (status.isReady) {
      onReady?.();
    } else if (status.isInBlock) {
      console.info("Transaction inBlock:", { blockNumber, txHash });
      onInBlock?.();
      resolve({
        txHash: txHash.toString(),
        blockNumber: blockNumber?.toString(),
      });
    } else if (status.isBroadcast) {
      onBroadcast?.();
    } else if (status.isFinalized) {
      onFinalized?.();
    } else {
      console.info(`Transaction status: ${status.type}`);
    }
  };
};
