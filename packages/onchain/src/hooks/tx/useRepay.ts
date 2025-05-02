import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface RepayParams {
  assetId: string;
}
interface MutationFnParams {
  balance: string | bigint;
  options?: TransactionStatus;
}

export const useRepay = ({ assetId }: RepayParams) => {
  const { execute } = useTransaction("lending", "repay");

  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, options } = params;
      return execute(options, assetId, amount);
    },
  });
};
