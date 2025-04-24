import { useRpc } from "../useRpc";
import { useQuery, skipToken } from "@tanstack/react-query";
import { decodeArrayToString, queryKeys, useAccountsStore } from "@repo/shared";
import { formatUnit } from "../../utils";
interface Params {
  assetId?: string;
  account?: string;
}

export const useGetLendingPools = ({ assetId, account }: Params = {}) => {
  const { execute, isApiAvailable } = useRpc("lending", "getLendingPools");
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = account || activeAccount?.address;
  const enabled = isApiAvailable && account;
  return useQuery({
    queryKey: queryKeys.lendingPools({ account, asset: assetId }),
    queryFn: enabled
      ? async () => {
          const response = await execute(assetId, finalAccount);
          if (!response) return undefined;

          const assets = response[0].map((asset) => ({
            asset: decodeArrayToString(asset.asset),
            asset_decimals: asset.asset_decimals,
            asset_icon: decodeArrayToString(asset.asset_icon),
            asset_symbol: decodeArrayToString(asset.asset_symbol),
            user_asset_balance: BigInt(asset.user_asset_balance || 0),
            borrow_apy: asset.borrow_apy,
            borrow_apy_s: asset.borrow_apy_s,
            total_pool_borrow: asset.total_pool_borrow,
            total_pool_supply: asset.total_pool_supply,
            collateral_q: asset.collateral_q,
            asset_id: asset.asset_id,
            id: asset.id,
            is_activated: asset.is_activated,
            supply_apy: asset.supply_apy,
            supply_apy_s: asset.supply_apy_s,
            utilization: asset.utilization,
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
