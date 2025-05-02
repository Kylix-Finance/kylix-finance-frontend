import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { SupplyMutationFnParams, SupplyParams } from "../../types";

export const useSupply = ({ assetId }: SupplyParams) => {
  const { execute } = useTransaction("lending", "supply");
  return useMutation({
    mutationFn: async (params: SupplyMutationFnParams) => {
      const { balance: amount, onConfirm } = params;
      return execute(onConfirm, assetId, amount);
    },
  });
};
