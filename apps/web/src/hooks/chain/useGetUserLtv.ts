import { WsProvider } from "@polkadot/api";
import { formatUnit, useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

export interface UseGetUserLtvParams {
  account?: string;
}
export interface UserLtvResult {
  current_ltv: string;
  sale_ltv: string;
  liquidation_ltv: string;
}

export const useGetUserLtv = ({ account }: UseGetUserLtvParams = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  return useQuery({
    queryKey: queryKeys.userLtv(account),
    queryFn:
      !!provider && !!(account || activeAccount)
        ? () =>
            userLtv(provider, { account: activeAccount?.address || account })
        : skipToken,
  });
};

const userLtv = async (
  provider: WsProvider,
  { account }: UseGetUserLtvParams
) => {
  const result = await provider.send<UserLtvResult>("getUserLtv", [account]);
  const saleLtv = Number(formatUnit(result.sale_ltv)).toFixed(2);
  const currentLtv = Number(formatUnit(result.current_ltv)).toFixed(2);
  const liquidationLtv = Number(formatUnit(result.liquidation_ltv)).toFixed(2);

  return {
    currentLtv: currentLtv,
    saleLtv: saleLtv,
    liquidationLtv: liquidationLtv,
  };
};
