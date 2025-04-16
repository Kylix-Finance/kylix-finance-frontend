import { useRpc } from "../useRpc";
import { useActiveAccount } from "../useActiveAccount";
import { useQuery, skipToken } from "@tanstack/react-query";
import { decodeArrayToString, queryKeys } from "@repo/shared";
interface Params {
  poolId?: string;
  account?: string;
}

export const useGetAssetWiseSupplies = ({ poolId, account }: Params = {}) => {
  const { execute, isApiAvailable } = useRpc("lending", "getAssetWiseSupplies");
  const { activeAccount } = useActiveAccount();
  const finalAccount = account || activeAccount?.address;
  const enabled = isApiAvailable && account;
  return useQuery({
    queryKey: queryKeys.assetWiseBorrowsCollaterals(finalAccount, poolId),
    queryFn: enabled
      ? async () => {
          const response = await execute(account);
          if (!response) return null;
          return {
            suppliedAssets: response[0].map((item) => ({
              isCollateral: item.is_collateral,
              supplied: BigInt(item.supplied),
              apy: item.apy,
              assetId: item.asset_id,
              assetSymbol: decodeArrayToString(item.asset_symbol),
              assetName: decodeArrayToString(item.asset_name),
              decimals: item.decimals,
              assetIcon: decodeArrayToString(item.asset_icon),
              balance: BigInt(item.balance),
            })),
            totalSupplied: BigInt(response[1] || 0),
          };
        }
      : skipToken,
  });
};
