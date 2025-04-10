import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";

interface RepayAllParams {
  assetId: string;
}

interface MutationFnParams {
  onConfirm?: () => void;
}

export const useRepayAll = ({ assetId }: RepayAllParams) => {
  const { execute } = useTransaction("lending", "repayAll")
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { onConfirm } = params;
      return execute(onConfirm, assetId)
    },
  });
};
