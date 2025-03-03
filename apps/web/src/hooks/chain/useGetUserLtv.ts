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
  currentLtv: number;
  currentBorrow: number;
  saleLtv: number;
  liquidationLtv: number;
  borrowLimit: number;
  allowance: number;
  liquidationValue: number;
  collateral: number;
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
    allowance: Number(formatUnit(result.allowance, 4)),
    borrowLimit: Number(formatUnit(result.borrow_limit, 4)),
    collateral: Number(formatUnit(result.collateral, 4)),
    currentBorrow: Number(formatUnit(result.current_borrow, 4)),
    currentLtv: Number(formatUnit(result.current_ltv, 4)),
    liquidationLtv: Number(formatUnit(result.liquidation_ltv, 16)),
    liquidationValue: Number(formatUnit(result.liquidation_value, 4)),
    saleLtv: Number(formatUnit(result.sale_ltv, 16)),
  };
};
