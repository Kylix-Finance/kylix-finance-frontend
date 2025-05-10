import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys, useAccountsStore } from "@repo/shared";
import { useRpc } from "../useRpc";
import { formatUnit } from "../../utils";
interface Params {
  account?: string;
  assetId: number | string;
}

export const useGetUserBids = ({ account, assetId }: Params) => {
  const { execute, isApiAvailable } = useRpc("liquidation", "getUserBids");
  const { account: activeAccount } = useAccountsStore();
  const finalAccount = (account || activeAccount?.address) as string;
  const enabled = isApiAvailable || !!finalAccount;
  return useQuery({
    queryKey: queryKeys.userBids(finalAccount),
    queryFn: enabled
      ? async () => {
          const response = await execute(finalAccount, +assetId);
          if (!response) return null;
          return response.map((item) => ({
            ...item,
            formatted_bid_amount: formatUnit(
              item.bid_amount,
              item.bid_asset_info.decimals
            ),
          }));
        }
      : skipToken,
  });
};
