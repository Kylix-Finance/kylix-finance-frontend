import { WsProvider } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
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
  const saleLtv = Number(result.sale_ltv);
  const base = saleLtv * (13 / 10);
  const currentLtv = Number(result.current_ltv);
  const liquidationLtv = Number(result.liquidation_ltv);

  return {
    currentLtv: ((currentLtv * 100) / base).toFixed(2),
    saleLtv: ((saleLtv * 100) / base).toFixed(2),
    liquidationLtv: ((liquidationLtv * 100) / base).toFixed(2),
  };
};
