import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/api/types";

import { queryKeys } from "@repo/shared";
import { useMutation } from "@tanstack/react-query";
import { useProvider } from "../useProvider";
import { useActiveAccount } from "../useActiveAccount";
import { useSigner } from "../useSigner";
import { useBalance } from "../query/useBalance";
import { isAccountExists } from "src/utils/validators/isAccountExists";
import { isApiExists } from "src/utils/validators/isApiExists";
import { isSignerExists } from "src/utils/validators/isSignerExists";
import { validateEstimatedGas } from "src/utils/validateTransactionFees";
import { transactionStatus } from "src/utils/transactionStatus";

interface BorrowParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

interface BorrowDependencies {
  api: ApiPromise;
  activeAccount: string;
  signer: Signer;
  getBalance: bigint;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

export const useBorrow = ({ assetId }: BorrowParams) => {
  const { data: provider } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { data: signer } = useSigner();
  const { data: balance } = useBalance();

  return useMutation({
    mutationKey: queryKeys.borrow,
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
      return borrowTransaction(assetId, params, {
        api: provider.api,
        signer,
        getBalance: balance.realBalance,
        activeAccount: activeAccount?.address,
      });
    },
  });
};

export const borrowTransaction = async (
  assetId: string,
  { balance, onConfirm }: MutationFnParams,
  { api, activeAccount, signer, getBalance }: BorrowDependencies
) => {
  api.setSigner(signer);
  const extrinsic = api.tx.lending.borrow(assetId, balance);
  await validateEstimatedGas(extrinsic, activeAccount, getBalance);

  return new Promise((resolve, reject) => {
    extrinsic
      .signAndSend(
        activeAccount,
        transactionStatus({
          api,
          onConfirm,
          resolve,
          reject,
        })
      )
      .catch(reject);
  });
};
