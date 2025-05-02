import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { TransactionStatus } from "../../types";

interface RepayAllParams {
  assetId: string;
}

interface MutationFnParams {
  options?: TransactionStatus;
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
