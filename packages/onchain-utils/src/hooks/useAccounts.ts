import { useQuery } from "@tanstack/react-query";
import { baseKey } from "../constants";

export const accountQueryKey = [baseKey, "accounts"];

export const useAccounts = () => {
  return useQuery({ queryKey: accountQueryKey });
};
