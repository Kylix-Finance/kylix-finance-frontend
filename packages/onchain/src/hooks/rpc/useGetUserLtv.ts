import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys, useAccountsStore } from "@repo/shared";
import { useRpc } from "../useRpc";

interface Params {
  account?: string;
}

export const useGetUserLtv = ({ account }: Params = {}) => {
  const { execute, isApiAvailable } = useRpc("lending", "getUserLtv");
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = (account || activeAccount?.address) as string;
  const enabled = isApiAvailable || !!finalAccount;
  return useQuery({
    queryKey: queryKeys.userLtv(finalAccount),
    queryFn: enabled ? () => execute(finalAccount) : skipToken,
  });
};
