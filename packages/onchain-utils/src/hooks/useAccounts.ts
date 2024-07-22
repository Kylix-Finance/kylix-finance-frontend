import { useQuery } from "@tanstack/react-query";
import { Accounts } from "@repo/types";
import { queryKeys } from "@repo/constants";

export const useAccounts = () => {
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.accounts,
    queryFn: (): Accounts => {
      return {} as Accounts;
    },
  });

  return { accounts: data?.accounts, ...rest };
};
