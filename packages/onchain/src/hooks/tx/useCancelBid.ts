import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";

interface CancelBidParams {
  assetId: string;
}


interface MutationFnParams {
  discount: number;
  onConfirm?: () => void;
  txIndex: number;
  txBlockNumber: number;
}
export const useCancelBid = ({ assetId }: CancelBidParams) => {
  const { execute } = useTransaction("lending", "cancelBid")
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { onConfirm, discount, txBlockNumber, txIndex, } = params
      return execute(onConfirm, assetId, discount, txIndex, txBlockNumber)
    },
  });
};
