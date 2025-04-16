import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";

interface SupplyParams {
  assetId: string;
}

interface MutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}

export const useSupply = ({ assetId }: SupplyParams) => {
  const { execute } = useTransaction("lending", "supply");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { balance: amount, onConfirm } = params;
      return execute(onConfirm, assetId, amount);
    },
  });
};
