import { ApiPromise } from "@polkadot/api";
import { Signer, SubmittableResultValue } from "@polkadot/api/types";

import { queryKeys } from "@repo/shared";
import { useMutation } from "@tanstack/react-query";
import { useProvider } from "../useProvider";
import { useActiveAccount } from "../useActiveAccount";
import { useSigner } from "../useSigner";
import { useBalance } from "../query/useBalance";
import { isAccountExists } from "src/utils/validators/isAccountExists";
import { isApiExists } from "src/utils/validators/isApiExists";
import { isSignerExists } from "src/utils/validators/isSignerExists";

interface RepayParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

interface RepayDependencies {
  api: ApiPromise;
  activeAccount: string;
  signer: Signer;
  getBalance: bigint;
}

interface MutationFnParams {
  supplyPoolId: string;
  borrowPoolId: string;
  borrowValue: string;
  onConfirm?: () => void;
}

export const useQuickBorrow = () => {
  const { data: provider } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { data: signer } = useSigner();
  const { data: balance } = useBalance();
  return useMutation({
    mutationKey: queryKeys.supply,
    mutationFn: async (params: MutationFnParams) => {
      if (
        !isAccountExists(activeAccount?.address) ||
        !isApiExists(provider?.api) ||
        !isSignerExists(signer)
      )
        return;
      if (!balance) {
        throw new Error("Balance information is not available");
      }
      return quickBorrowTransaction(params, {
        api: provider.api,
        signer,
        getBalance: balance.realBalance,
        activeAccount: activeAccount?.address,
      });
    },
  });
};

export const quickBorrowTransaction = async (
  { borrowPoolId, borrowValue, supplyPoolId }: MutationFnParams,
  { api, activeAccount, signer, getBalance }: RepayDependencies
) => {
  api.setSigner(signer);
  const extrinsic = api?.tx?.lending?.borrow?.(
    borrowPoolId,
    borrowValue,
    supplyPoolId
  );
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
            } else if (status.isInBlock) {
              console.info("Transaction inBlock:", { blockNumber, txHash });
              resolve({
                txHash: txHash.toString(),
                blockNumber: blockNumber?.toString(),
              });
            } else {
              console.info(`Transaction status: ${status.type}`);
            }
          }
        )
        .catch(reject);
    }
  );
};
