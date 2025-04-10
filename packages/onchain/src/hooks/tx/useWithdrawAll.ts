import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";

interface WithdrawAllParams {
  assetId: string;
}

interface MutationFnParams {
  onConfirm?: () => void;
}

export const useWithdrawAll = ({ assetId }: WithdrawAllParams) => {
  const { execute } = useTransaction("lending", "withdrawAll")
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { onConfirm } = params;
      return execute(onConfirm, assetId)
    },
  });
};
