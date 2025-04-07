import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/types/types";
import { useMutation } from "@tanstack/react-query";
import { useActiveAccount } from "../useActiveAccount";
import { useProvider } from "../useProvider";
import { useSigner } from "../useSigner";
import { useBalance } from "../query/useBalance";
import { isAccountExists } from "src/utils/validators/isAccountExists";
import { isApiExists } from "src/utils/validators/isApiExists";
import { isSignerExists } from "src/utils/validators/isSignerExists";
import { validateEstimatedGas } from "src/utils/validateTransactionFees";
import { transactionStatus } from "src/utils/transactionStatus";

interface CancelBidParams {
  assetId: string;
}

interface PlaceBidDependencies {
  api: ApiPromise;
  activeAccount: string;
  signer: Signer;
  getBalance: bigint;
}


interface MutationFnParams {
  discount: number;
  onConfirm?: () => void;
  txIndex: number;
  txBlockNumber: number;
}
export const useCancelBid = ({ assetId }: CancelBidParams) => {
  const { activeAccount } = useActiveAccount();
  const { data: provider } = useProvider();
  const { data: signer } = useSigner();
  const { data: balance } = useBalance();
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      if (!isAccountExists(activeAccount?.address) || !isApiExists(provider?.api) || !isSignerExists(signer)) return;
      if (!balance) {
        throw new Error("Balance information is not available");
      }
      return cancelBid(assetId, params, {
        api: provider.api,
        signer,
        activeAccount: activeAccount.address,
        getBalance: balance.realBalance,
      })
    }
  });
};

export const cancelBid = async (
  assetId: string,
  { discount, txBlockNumber, txIndex, onConfirm }: MutationFnParams,
  { activeAccount, api, signer, getBalance }: PlaceBidDependencies
) => {

  api.setSigner(signer);
  const extrinsic = api.tx.lending.cancelBid(
    assetId,
    discount,
    txIndex,
    txBlockNumber
  );
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
