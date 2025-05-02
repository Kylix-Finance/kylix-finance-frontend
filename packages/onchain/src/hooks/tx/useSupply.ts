import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { SupplyParams, TransactionStatus } from "../../types";

export interface SupplyMutationFnParams {
  balance: string | bigint;
  options?: TransactionStatus;
}
export const useSupply = ({ assetId }: SupplyParams) => {
  const { execute } = useTransaction("lending", "supply");
  return useMutation({
    mutationFn: async (params: SupplyMutationFnParams) => {
      const { balance: amount, options } = params;
      return execute(options, assetId, amount);
    },
  });
};
