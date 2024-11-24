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
  borrow_limit: string;
  allowance: string;
}

export const useGetUserLtv = ({ account }: UseGetUserLtvParams = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();
  const finalAccount = account || activeAccount?.address;
  const enabled = !!provider && !!finalAccount;

  return useQuery({
    queryKey: queryKeys.userLtv(finalAccount),
    queryFn: enabled
      ? () => userLtv(provider, { account: finalAccount })
      : skipToken,
  });
};

const userLtv = async (
  provider: WsProvider,
  { account }: UseGetUserLtvParams
) => {
  const result = await provider.send<UserLtvResult>("lending_getUserLtv", [
    account,
  ]);
  const saleLtv = Number(formatUnit(result.sale_ltv, 16)).toFixed(2);
  const currentLtv = Number(formatUnit(result.current_ltv, 16)).toFixed(2);
  const liquidationLtv = Number(formatUnit(result.liquidation_ltv, 16)).toFixed(
    2
  );
  const borrowLimit = Number(formatUnit(result.borrow_limit, 18)).toFixed(2);
  const allowance = Number(formatUnit(result.allowance, 18)).toFixed(2);

  return {
    currentLtv,
    saleLtv,
    liquidationLtv,
    borrowLimit,
    allowance,
  };
};
