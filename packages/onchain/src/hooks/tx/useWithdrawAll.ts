import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface WithdrawAllParams {
  assetId: string;
}

interface MutationFnParams {
  options?: TransactionStatus;
}

export const useWithdrawAll = ({ assetId }: WithdrawAllParams) => {
  const { execute } = useTransaction("lending", "withdrawAll");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { options } = params;
      return execute(options, assetId);
    },
  });
};
