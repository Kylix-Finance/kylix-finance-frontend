import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface WithdrawParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  options?: TransactionStatus;
}

export const useWithdraw = ({ assetId }: WithdrawParams) => {
  const { execute } = useTransaction("lending", "withdraw");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, options } = params;
      return execute(options, assetId, amount);
    },
  });
};
