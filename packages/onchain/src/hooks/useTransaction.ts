import { AugmentedSubmittables, ApiTypes } from "@polkadot/api/types";
import { useProvider } from "./useProvider";
import { useSigner } from "./useSigner";
import { isAccountExists } from "../utils/validators/isAccountExists";
import { isApiExists } from "../utils/validators/isApiExists";
import { isSignerExists } from "../utils/validators/isSignerExists";
import { validateEstimatedGas } from "../utils/validateTransactionFees";
import { transactionStatus } from "../utils/transactionStatus";
import { useBalance } from "./query/useBalance";
import { useAccountsStore } from "@repo/shared";
import { TransactionStatus, UseTransactionResult } from "../types";

type ApiOperations = keyof AugmentedSubmittables<ApiTypes>;
type OperationMethods<T extends ApiOperations> =
  AugmentedSubmittables<ApiTypes>[T];

export const useTransaction = <
  T extends ApiOperations,
  K extends keyof OperationMethods<T>,
>(
  module: T,
  method: K
) => {
  const { data: provider } = useProvider();
  const { account } = useAccountsStore();
  const { data: signer } = useSigner();
  const { data: balance } = useBalance();

  const execute = async (
    options?: TransactionStatus,
    ...args: Parameters<OperationMethods<T>[K]>
  ) => {
    if (
      !isAccountExists(account?.address) ||
      !isApiExists(provider?.api) ||
      !isSignerExists(signer)
    )
      return;
    if (!balance) {
      throw new Error("Balance information is not available");
    }
    provider.api.setSigner(signer);
    const extrinsic = provider.api.tx[module][method](...args);
    await validateEstimatedGas(extrinsic, account.address, balance.realBalance);

    return new Promise<UseTransactionResult>((resolve, reject) => {
      extrinsic
        .signAndSend(
          account.address,
          transactionStatus({
            api: provider.api,
            resolve,
            reject,
            ...options,
          })
        )
        .catch(reject);
    });
  };
  return {
    execute,
  };
};
