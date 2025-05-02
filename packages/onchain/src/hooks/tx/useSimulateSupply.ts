import { useMutation } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { SimulateSupplyMutationFnPrams, SupplyParams } from "../../types";

export const useSimulateSupply = ({ assetId }: SupplyParams) => {
  const { simulate } = useTransaction("lending", "supply");
  return useMutation({
    mutationFn: async ({ balance }: SimulateSupplyMutationFnPrams) =>
      simulate(assetId, balance),
  });
};
