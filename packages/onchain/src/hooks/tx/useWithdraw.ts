import { skipToken, useMutation } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/api/types";
import { useProvider } from "../useProvider";
import { useActiveAccount } from "../useActiveAccount";
import { useSigner } from "../useSigner";
import { useBalance } from "../query/useBalance";
import { isApiExists } from "src/utils/validators/isApiExists";
import { isSignerExists } from "src/utils/validators/isSignerExists";
import { isAccountExists } from "src/utils/validators/isAccountExists";
import { transactionStatus } from "src/utils/transactionStatus";
import { validateEstimatedGas } from "src/utils/validateTransactionFees";

interface WithdrawParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

interface WithdrawDependencies {
  api: ApiPromise;
  activeAccount: string;
  signer: Signer;
  getBalance: bigint;
}

export const useWithdraw = ({ assetId }: WithdrawParams) => {
  const { data: provider } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { data: signer } = useSigner();
  const { data: balance } = useBalance();

  return useMutation({
    mutationKey: queryKeys.withdraw,
    mutationFn: async (params: MutationFnParams) => {
      if (!isAccountExists(activeAccount?.address) || !isApiExists(provider?.api) || !isSignerExists(signer)) return

      if (!balance) {
        throw new Error("Balance information is not available");
      }

      return withdrawTransaction(
        assetId,
        params,
        {
          api: provider.api,
          signer,
          getBalance: balance.realBalance,
          activeAccount: activeAccount.address,
        }
      );
    },
  });
};

export const withdrawTransaction = async (
  assetId: string,
  { balance, onConfirm }: MutationFnParams,
  { api, activeAccount, signer, getBalance }: WithdrawDependencies
) => {
  api.setSigner(signer);

  const extrinsic = api.tx.lending.withdraw(assetId, balance);

  await validateEstimatedGas(extrinsic, activeAccount, getBalance)

  return new Promise((resolve, reject) => {
    extrinsic
      .signAndSend(
        activeAccount,
        transactionStatus({
          api,
          onConfirm,
          resolve,
          reject
        })
      )
      .catch(reject);
  });
};

