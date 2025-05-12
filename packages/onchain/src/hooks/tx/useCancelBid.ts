import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionCallbacks } from "../../types";

interface CancelBidParams {
  assetId: string;
}

export interface CancelBidMutationFnParams {
  discount: number;
  txIndex: number;
  txBlockNumber: number;
  options?: TransactionCallbacks;
}
export const useCancelBid = ({ assetId }: CancelBidParams) => {
  const { execute } = useTransaction("lending", "cancelBid");
  return useMutation({
    mutationFn: async (params: CancelBidMutationFnParams) => {
      const { options, discount, txBlockNumber, txIndex } = params;
      return execute(options, assetId, discount, txIndex, txBlockNumber);
    },
  });
};
