import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";

interface WithdrawParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

export const useWithdraw = ({ assetId }: WithdrawParams) => {
  const { execute } = useTransaction("lending", "withdraw");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, onConfirm } = params;
      return execute(onConfirm, assetId, amount);
    },
  });
};
