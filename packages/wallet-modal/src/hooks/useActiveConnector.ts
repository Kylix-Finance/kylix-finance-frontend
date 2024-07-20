import { useQuery } from "@tanstack/react-query";
import { Wallet } from "../types";
import { baseKey } from "../constants";

export const connectorQueryKey = [baseKey, "active-connector"];

export const useActiveConnector = () => {
  return useQuery<Wallet>({
    queryKey: connectorQueryKey,
  });
};
