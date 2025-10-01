import { useRpc } from "../useRpc";
import { useQuery, skipToken } from "@tanstack/react-query";
import { decodeArrayToString, queryKeys, useAccountsStore } from "@repo/shared";

export type UseGetAssetWiseSupplies = ReturnType<
  typeof useGetAssetWiseSupplies
>;

interface Params {
  poolId?: string;
  account?: string;
  enabled?: boolean;
}

export const useGetAssetWiseSupplies = ({
  poolId,
  account,
  enabled: _enabled = true,
}: Params = {}) => {
  const { execute, isApiAvailable } = useRpc("lending", "getAssetWiseSupplies");
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = account || activeAccount?.address;
  const enabled = isApiAvailable && finalAccount && _enabled;
  return useQuery({
    queryKey: queryKeys.assetWiseSupplies(finalAccount),
    queryFn: enabled
      ? async () => {
          const response = await execute(finalAccount);
          if (!response) return null;
          return {
            suppliedAssets: response[0].map((item) => ({
              isCollateral: item.is_collateral,
              apy: item.apy,
              assetId: item.asset_id,
              decimals: item.decimals,
              supplied: BigInt(item.supplied),
              assetSymbol: decodeArrayToString(item.asset_symbol),
              assetName: decodeArrayToString(item.asset_name),
              assetIcon: decodeArrayToString(item.asset_icon),
              balance: BigInt(item.balance),
            })),
            totalSupplied: BigInt(response[1] || 0),
          };
        }
      : skipToken,
  });
};
