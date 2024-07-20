import { useQuery } from "@tanstack/react-query";
import { baseKey } from "../constants";
import { InjectedAccount } from "@polkadot/extension-inject/types";

export const activeAccountQueryKey = [baseKey, "active-account"];

export const useActiveAccount = () => {
  const { data, ...rest } = useQuery<InjectedAccount>({
    queryKey: activeAccountQueryKey,
  });

  return { activeAccount: data, ...rest };
};
