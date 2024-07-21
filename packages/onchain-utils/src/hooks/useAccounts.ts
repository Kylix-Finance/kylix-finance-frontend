import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseKey } from "../constants";
import { Accounts } from "@repo/types";

export const accountQueryKey = [baseKey, "accounts"];

export const useAccounts = () => {
  const { data, ...rest } = useQuery({
    queryKey: accountQueryKey,
    queryFn: (): Accounts => {
      return {} as Accounts;
    },
  });

  return { accounts: data?.accounts, ...rest };
};
