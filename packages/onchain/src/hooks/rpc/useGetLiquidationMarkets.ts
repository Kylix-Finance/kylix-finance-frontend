import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useRpc } from "../useRpc";
import { useActiveAccount } from "../useActiveAccount";
import { formatUnit } from "../../utils";

interface Params {
  account?: string;
}

export const useGetLiquidationMarkets = ({ account }: Params) => {
  const { execute, isApiAvailable } = useRpc(
    "liquidation",
    "getLiquidationMarkets"
  );
  const { activeAccount } = useActiveAccount();
  const finalAccount = account || activeAccount?.address;
  const enabled = isApiAvailable;
  return useQuery({
    queryKey: queryKeys.liquidationMarkets({ account }),
    queryFn: enabled
      ? async () => {
          const response = await execute(finalAccount);
          if (!response) return null;
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
