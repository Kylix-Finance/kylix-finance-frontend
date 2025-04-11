import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useRpc } from "../useRpc";
import { useActiveAccount } from "../useActiveAccount"

interface Params {
  account?: string;
}

export const useGetUserLtv = ({ account }: Params) => {
  const { execute, isApiAvailable } = useRpc("lending", "getUserLtv")
  const { activeAccount } = useActiveAccount()
  const finalAccount = (account || activeAccount?.address) as string
  const enabled = isApiAvailable || !!finalAccount
  return useQuery({
    queryKey: queryKeys.userLtv(finalAccount),
    queryFn: enabled ? () => execute(finalAccount) : skipToken,
  });
};
