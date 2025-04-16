import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";

interface BorrowParams {
  assetId: string;
}
interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

export const useBorrow = ({ assetId }: BorrowParams) => {
  const { execute } = useTransaction("lending", "borrow");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, onConfirm } = params;
      return execute(onConfirm, assetId, amount);
    },
  });
};
