import { useRpc } from "../useRpc";
import { useQuery, skipToken } from "@tanstack/react-query";
import { decodeArrayToString, queryKeys, useAccountsStore } from "@repo/shared";
import { formatUnit } from "../../utils";
interface Params {
  assetId?: number | null | string;
  account?: string | null | undefined;
  enabled?: boolean;
}

export type LandingPool = NonNullable<
  ReturnType<typeof useGetLendingPools>["data"]
>["assets"][number];

export const useGetLendingPools = ({
  assetId = null,
  account = null,
  enabled = true,
}: Params = {}) => {
  const { execute, isApiAvailable } = useRpc("lending", "getLendingPools");
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = account || activeAccount?.address || null;
  const finalEnabled = isApiAvailable || enabled;
  return useQuery({
    queryKey: queryKeys.lendingPools({ account, asset: assetId }),
    queryFn: finalEnabled
      ? async () => {
          const response = await execute(
            assetId ? +assetId : null,
            finalAccount
          );
          if (!response) return undefined;

          const assets = response[0].map((asset) => ({
            ...asset,
            asset: decodeArrayToString(asset.asset),
            asset_icon: decodeArrayToString(asset.asset_icon),
            asset_symbol: decodeArrayToString(asset.asset_symbol),
            user_asset_balance: BigInt(asset.user_asset_balance || 0),
            is_collateral: Boolean(asset.is_collateral),
            formatted_user_balance: asset.user_asset_balance
              ? formatUnit(asset.user_asset_balance, asset.asset_decimals)
              : null,
          }));

          const summary = {
            total_borrow: BigInt(response[1].total_borrow),
            total_supply: BigInt(response[1].total_supply),
          };

          return {
            assets,
            summary,
          };
        }
      : skipToken,
  });
};
