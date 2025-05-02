import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface CancelBidParams {
  assetId: string;
}

interface MutationFnParams {
  discount: number;
  txIndex: number;
  txBlockNumber: number;
  options?: TransactionStatus;
}
export const useCancelBid = ({ assetId }: CancelBidParams) => {
  const { execute } = useTransaction("lending", "cancelBid");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { options, discount, txBlockNumber, txIndex } = params;
      return execute(options, assetId, discount, txIndex, txBlockNumber);
    },
  });
};
