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

interface PlaceBidParams {
  assetId: string;
}

interface PlaceBidDependencies {
  api: ApiPromise;
  activeAccount: string;
  signer: Signer;
  getBalance: bigint;
}

interface MutationFnParams {
  balance: string | bigint;
  discount: number;
  onConfirm?: () => void;
}
export const usePlaceBid = ({ assetId }: PlaceBidParams) => {
  const { data: provider } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { data: signer } = useSigner();
  const { data: balance } = useBalance();
  return useMutation({
    mutationKey: queryKeys.placeBid,
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
      return placeBidTransaction(assetId, params, {
        api: provider.api,
        signer,
        getBalance: balance.realBalance,
        activeAccount: activeAccount?.address,
      });
    },
  });
};

export const placeBidTransaction = async (
  assetId: string,
  { balance, discount, onConfirm }: MutationFnParams,
  { api, activeAccount, signer, getBalance }: PlaceBidDependencies
) => {
  api.setSigner(signer);
  const extrinsic = api.tx.lending.placeBid(assetId, discount, balance);
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
