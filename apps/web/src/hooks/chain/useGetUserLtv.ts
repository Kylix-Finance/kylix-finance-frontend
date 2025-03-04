import { WsProvider } from "@polkadot/api";
import { formatUnit, useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

export interface UseGetUserLtvParams {
  account?: string;
}
export interface UserLtvResultRaw {
  current_ltv: string;
  current_borrow: string;
  sale_ltv: string;
  liquidation_ltv: string;
  borrow_limit: string;
  allowance: string;
  liquidation_value: string;
  collateral: string;
}

export interface UserLtvResult {
  currentLtv: string;
  currentBorrow: string;
  saleLtv: string;
  liquidationLtv: string;
  borrowLimit: string;
  allowance: string;
  liquidationValue: string;
  collateral: string;
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
): Promise<UserLtvResult> => {
  const result = await provider.send<UserLtvResultRaw>("lending_getUserLtv", [
    account,
  ]);
  return {
    allowance: Number(formatUnit(result.allowance, 18)).toFixed(2),
    borrowLimit: Number(formatUnit(result.borrow_limit, 4)).toFixed(2),
    collateral: Number(formatUnit(result.collateral, 4)).toFixed(2),
    currentBorrow: Number(formatUnit(result.current_borrow, 4)).toFixed(2),
    currentLtv: Number(formatUnit(result.current_ltv, 16)).toFixed(2),
    liquidationLtv: Number(formatUnit(result.liquidation_ltv, 16)).toFixed(2),
    liquidationValue: Number(formatUnit(result.liquidation_value, 4)).toFixed(
      2
    ),
    saleLtv: Number(formatUnit(result.sale_ltv, 16)).toFixed(2),
  };
};
