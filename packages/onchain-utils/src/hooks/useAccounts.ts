import { useQuery } from "@tanstack/react-query";
import { baseKey } from "../constants";
import { Accounts } from "@repo/types";

export const accountQueryKey = [baseKey, "accounts"];

export const useAccounts = () => {
  const { data, ...rest } = useQuery<Accounts>({ queryKey: accountQueryKey });

  return { accounts: data?.accounts, ...rest };
};
