import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
interface RepayParams {
  assetId: string;
}
interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}
interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}
export const useRepay = ({ assetId }: RepayParams) => {
  const { execute } = useTransaction("lending", "repay");

  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, onConfirm } = params;
      return execute(onConfirm, assetId, amount);
    },
  });
};
