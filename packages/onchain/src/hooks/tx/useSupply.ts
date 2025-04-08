import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/api/types";

import { queryKeys } from "@repo/shared";
import { useMutation } from "@tanstack/react-query";
import { useProvider } from "../useProvider";
import { useActiveAccount } from "../useActiveAccount";
import { useSigner } from "../useSigner";
import { useBalance } from "../query/useBalance";
import { isAccountExists } from "../../utils/validators/isAccountExists";
import { isApiExists } from "../../utils/validators/isApiExists";
import { isSignerExists } from "../../utils/validators/isSignerExists";
import { transactionStatus } from "../../utils/transactionStatus";
import { validateEstimatedGas } from "../../utils/validateTransactionFees";
interface SupplyParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

interface SupplyDependencies {
  api: ApiPromise;
  activeAccount: string;
  signer: Signer;
  getBalance: bigint;
}

export const useSupply = ({ assetId }: SupplyParams) => {
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
      return supplyTransaction(assetId, params, {
        api: provider.api,
        signer,
        getBalance: balance.realBalance,
        activeAccount: activeAccount.address,
      });
    },
  });
};

export const supplyTransaction = async (
  assetId: string,
  { balance, onConfirm }: MutationFnParams,
  { api, activeAccount, signer, getBalance }: SupplyDependencies
) => {
  api.setSigner(signer);
  const extrinsic = api.tx.lending.supply(assetId, balance);
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
