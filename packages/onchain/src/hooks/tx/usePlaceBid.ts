import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface PlaceBidParams {
  assetId: string;
}
interface MutationFnParams {
  balance: string | bigint;
  discount: number;
  options?: TransactionStatus;
}
export const usePlaceBid = ({ assetId }: PlaceBidParams) => {
  const { execute } = useTransaction("lending", "placeBid");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, options, discount } = params;
      return execute(options, assetId, discount, amount);
    },
  });
};
