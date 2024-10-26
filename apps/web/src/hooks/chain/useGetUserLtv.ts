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
  const result = await provider.send("getUserLtv", [account]);
  const currentLtv = BigInt(result.current_ltv) * 1000n;
  const saleLtv = BigInt(result.sale_ltv) * 1000n;
  const liquidationLtv = BigInt(result.liquidation_ltv);

  return {
    currentLtv: Number((currentLtv * 100n) / liquidationLtv) / 1000,
    saleLtv: Number((saleLtv * 100n) / liquidationLtv) / 1000,
    liquidationLtv: 100,
  };
};
