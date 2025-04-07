import { ApiPromise } from "@polkadot/api";
import { SubmittableResultValue } from "@polkadot/api-base/types";
interface Result {
    blockNumber: string | undefined;
    txHash: string;
}
export const transactionStatus = ({
    api,
    onConfirm,
    resolve,
    reject
}: {
    api: ApiPromise;
    onConfirm?: () => void;
    resolve: (value: Result) => void;
    reject: (reason: Error) => void;
}) => {
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
            onConfirm?.();
        } else if (status.isInBlock) {
            console.info("Transaction inBlock:", { blockNumber, txHash });
            resolve({
                txHash: txHash.toString(),
                blockNumber: blockNumber?.toString(),
            });
        } else {
            console.info(`Transaction status: ${status.type}`);
        }
    };
};