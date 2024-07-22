import { useQuery } from "@tanstack/react-query";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { queryKeys } from "@repo/constants";

export const useActiveAccount = () => {
  const { data, ...rest } = useQuery<InjectedAccount>({
    queryKey: queryKeys.activeAccount,
  });

  return { activeAccount: data, ...rest };
};
