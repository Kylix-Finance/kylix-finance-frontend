import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionCallbacks } from "../../types";

interface WithdrawAllParams {
  assetId: string;
}

interface MutationFnParams {
  options?: TransactionCallbacks;
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
