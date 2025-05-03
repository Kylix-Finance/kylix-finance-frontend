import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys, useAccountsStore } from "@repo/shared";
import { useRpc } from "../useRpc";
import { formatUnit } from "../../utils";

interface Params {
  account?: string | null;
  enabled?: boolean;
}

export type LiquidationMarket = NonNullable<
  ReturnType<typeof useGetLiquidationMarkets>["data"]
>[number];

export const useGetLiquidationMarkets = ({
  account = null,
  enabled = true,
}: Params) => {
  const { execute, isApiAvailable } = useRpc(
    "liquidation",
    "getLiquidationMarkets"
  );
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = account || activeAccount?.address || null;
  const finalEnabled = isApiAvailable || enabled;
  return useQuery({
    queryKey: queryKeys.liquidationMarkets({ account }),
    queryFn: finalEnabled
      ? async () => {
          const response = await execute(finalAccount);
          if (!response) return undefined;
          return response.map((item) => ({
            ...item,
            formatted_tvl: formatUnit(item.tvl, item.asset_decimals),
            formatted_poolsize: formatUnit(item.pool_size, item.asset_decimals),
            formatted_user_bid: item.user_bid
              ? formatUnit(item.user_bid, item.bid_asset_decimals)
              : null,
          }));
        }
      : skipToken,
  });
};
