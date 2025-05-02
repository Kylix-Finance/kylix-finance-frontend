import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface BorrowParams {
  assetId: string;
}
interface MutationFnParams {
  balance: string | bigint;
  options?: TransactionStatus;
}

export const useBorrow = ({ assetId }: BorrowParams) => {
  const { execute } = useTransaction("lending", "borrow");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, options } = params;
      return execute(options, assetId, amount);
    },
  });
};
