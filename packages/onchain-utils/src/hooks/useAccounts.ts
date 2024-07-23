import { useQuery } from "@tanstack/react-query";
import { Accounts } from "../../../shared/src";
import { queryKeys } from "../../../shared/src/constants";

export const useAccounts = () => {
  // const {} = useAccou

  const { data, ...rest } = useQuery({
    queryKey: queryKeys.accounts,
    queryFn: () => {
      return {} as Accounts;
    },
  });

  return { accounts: data?.accounts, ...rest };
};
