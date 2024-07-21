import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseKey } from "../constants";
import { Accounts } from "@repo/types";

export const accountQueryKey = [baseKey, "accounts"];

type UseAccountsReturnType = {
  accounts?: Accounts["accounts"];
} & Omit<UseQueryResult<Accounts>, "data">;

export const useAccounts = (): UseAccountsReturnType => {
  const { data, ...rest } = useQuery<Accounts>({ queryKey: accountQueryKey });

  return { accounts: data?.accounts, ...rest };
};
