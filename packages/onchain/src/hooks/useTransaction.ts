import { AugmentedSubmittables, ApiTypes } from '@polkadot/api/types';
import { useProvider } from './useProvider';
import { useActiveAccount } from './useActiveAccount';
import { useSigner } from './useSigner';
import { isAccountExists } from "../utils/validators/isAccountExists";
import { isApiExists } from "../utils/validators/isApiExists";
import { isSignerExists } from "../utils/validators/isSignerExists";
import { validateEstimatedGas } from "../utils/validateTransactionFees";
import { transactionStatus } from "../utils/transactionStatus";
import { useBalance } from './query/useBalance';
type ApiOperations = keyof AugmentedSubmittables<ApiTypes>;
type OperationMethods<T extends ApiOperations> = AugmentedSubmittables<ApiTypes>[T];

export const useTransaction = <T extends ApiOperations, K extends keyof OperationMethods<T>>(module: T, method: K) => {
    const { data: provider } = useProvider();
    const { activeAccount } = useActiveAccount();
    const { data: signer } = useSigner();
    const { data: balance } = useBalance();

    const execute = async (onConfirm?: () => void, ...args: Parameters<OperationMethods<T>[K]>) => {
        if (
            !isAccountExists(activeAccount?.address) ||
            !isApiExists(provider?.api) ||
            !isSignerExists(signer)
        )
            return;
        if (!balance) {
            throw new Error("Balance information is not available");
        }
        provider.api.setSigner(signer);
        const extrinsic = provider.api.tx[module][method](args);
        await validateEstimatedGas(extrinsic, activeAccount.address, balance.realBalance);

        return new Promise((resolve, reject) => {
            extrinsic
                .signAndSend(
                    activeAccount.address,
                    transactionStatus({
                        api: provider.api,
                        onConfirm,
                        resolve,
                        reject,
                    })
                )
                .catch(reject);
        });
    }
    return {
        execute
    }
}