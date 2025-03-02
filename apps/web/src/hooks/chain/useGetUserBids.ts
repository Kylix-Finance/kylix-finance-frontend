import { WsProvider } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface UserBidsResponse {
  market_asset_info: {
    asset_id: string;
    asset_symbol: string;
    asset_name: string;
    decimals: string;
  };
  bid_asset_info: {
    asset_id: string;
    asset_symbol: string;
    asset_name: string;
    decimals: string;
  };
  bid_amount: string;
  discount: string;
  filled_amount: string;
  blocknumber: string;
  index: string;
}

export const useGetUserBids = () => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  const isEnabled = provider && !!activeAccount?.address;

  const query = useQuery({
    queryKey: queryKeys.userBids(activeAccount?.address),
    queryFn: isEnabled
      ? () => getUserBids({ provider, account: activeAccount.address })
      : skipToken,
  });

  return {
    ...query,
    isFetched: isEnabled === false ? true : query.isFetched,
  };
};

export const getUserBids = async ({
  provider,
  account,
}: {
  provider: WsProvider;
  account: string | undefined;
}) => {
  if (!account) return;

  const response = await provider.send<UserBidsResponse[]>(
    "liquidation_getUserBids",
    [account]
  );

  return response.map((bid) => ({
    marketAsset: {
      assetId: Number(bid.market_asset_info.asset_id),
      assetSymbol: bid.market_asset_info.asset_symbol,
      assetName: bid.market_asset_info.asset_name,
      decimals: Number(bid.market_asset_info.decimals),
      symbol: bid.market_asset_info.asset_symbol,
    },
    bidAsset: {
      assetId: Number(bid.bid_asset_info.asset_id),
      assetSymbol: bid.bid_asset_info.asset_symbol,
      assetName: bid.bid_asset_info.asset_name,
      decimals: Number(bid.bid_asset_info.decimals),
    },
    bidAmount: BigInt(bid.bid_amount),
    discount: Number(bid.discount),
    filledAmount: BigInt(bid.filled_amount),
    blockNumber: Number(bid.blocknumber),
    txIndex: Number(bid.index),
  }));
};
