import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";


interface PlaceBidParams {
  assetId: string;
}
interface MutationFnParams {
  balance: string | bigint;
  discount: number;
  onConfirm?: () => void;
}
export const usePlaceBid = ({ assetId }: PlaceBidParams) => {
  const { execute } = useTransaction("lending", "placeBid")
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, onConfirm, discount } = params
      return execute(onConfirm, assetId, discount, amount)
    },
  });
};
