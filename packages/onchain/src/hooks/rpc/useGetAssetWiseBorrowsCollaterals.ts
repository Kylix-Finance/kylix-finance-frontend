import { useRpc } from "../useRpc";
import { useQuery, skipToken } from "@tanstack/react-query";
import { decodeArrayToString, queryKeys, useAccountsStore } from "@repo/shared";
interface Params {
  poolId?: string | number;
  account?: string;
}

export const useGetAssetWiseBorrowsCollaterals = ({
  poolId,
  account,
}: Params = {}) => {
  const { execute, isApiAvailable } = useRpc(
    "lending",
    "getAssetWiseBorrowsCollaterals"
  );
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = account || activeAccount?.address;
  const enabled = isApiAvailable && account;
  return useQuery({
    queryKey: queryKeys.assetWiseBorrowsCollaterals(finalAccount, poolId),
    queryFn: enabled
      ? async () => {
          const response = await execute(account);
          if (!response) return null;
          return {
            borrowedAssets: response[0].map((item) => ({
              assetIcon: decodeArrayToString(item.asset_icon),
              assetName: decodeArrayToString(item.asset_name),
              assetSymbol: decodeArrayToString(item.asset_symbol),
              balance: BigInt(item.balance),
              borrowed: BigInt(item.borrowed || 0),
              apy: item.apy,
              assetId: item.asset_id,
              decimals: item.decimals,
              usdtBalance: BigInt(item.usdt_balance),
            })),
            collateralAssets: response[1].map((item) => ({
              assetIcon: decodeArrayToString(item.asset_icon),
              assetName: decodeArrayToString(item.asset_name),
              assetSymbol: decodeArrayToString(item.asset_symbol),
              balance: BigInt(item.balance),
              assetId: item.asset_id,
              decimals: item.decimals,
              usdtBalance: BigInt(item.usdt_balance),
            })),
            totalBorrowed: BigInt(response[2] || 0),
            totalCollateral: BigInt(response[3] || 0),
          };
        }
      : skipToken,
  });
};
