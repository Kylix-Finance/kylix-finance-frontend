import { WsProvider } from "@polkadot/api";
import { useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

type DiscountDistribution = {
  discount: number;
  amount: string;
};

type DiscountData = {
  supported_discounts: number[];
  distribution: DiscountDistribution[];
};

type GetMarketBidDistribution = {
  market_asset_id: string;
};

export const getMarketBidDistribution = async ({
  provider,
  market_asset_id,
}: { provider: WsProvider } & GetMarketBidDistribution) => {
  const result = await provider.send<DiscountData>(
    "liquidation_getLiquidationMarkets",
    [market_asset_id]
  );

  return result;
};

export const useGetMarketBidDistribution = ({
  market_asset_id,
}: GetMarketBidDistribution) => {
  const { provider } = useProvider();

  const enabled = !!provider;

  const query = useQuery({
    queryKey: queryKeys.marketBidDistribution({
      market_asset_id,
    }),
    queryFn: enabled
      ? () => getMarketBidDistribution({ provider, market_asset_id })
      : skipToken,
  });
  return query;
};
