import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionCallbacks } from "../../types";

interface RepayAllParams {
  assetId: string;
}

interface MutationFnParams {
  options?: TransactionCallbacks;
}

export const useRepayAll = ({ assetId }: RepayAllParams) => {
  const { execute } = useTransaction("lending", "repayAll");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { options } = params;
      return execute(options, assetId);
    },
  });
};
