import { WsProvider } from "@polkadot/api";
import { useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

type DiscountDistribution = {
  discount: number;
  amount: string;
};
type MetaData = {
  supported_discounts: number[];
};
type DiscountData = {
  distribution: DiscountDistribution[];
};

type GetMarketBidDistribution = {
  assetId: string;
};
type MarketBidDistributionResult = [MetaData, DiscountData];

export const getMarketBidDistribution = async ({
  provider,
  assetId,
}: { provider: WsProvider } & GetMarketBidDistribution) => {
  const response = await provider.send<MarketBidDistributionResult>(
    "liquidation_getMarketBidDistribution",
    [+assetId]
  );
  return response;
};

export const useGetMarketBidDistribution = ({
  assetId,
}: GetMarketBidDistribution) => {
  const { provider } = useProvider();

  const enabled = !!provider;
  const query = useQuery({
    queryKey: queryKeys.marketBidDistribution({
      assetId,
    }),
    queryFn: enabled
      ? () => getMarketBidDistribution({ provider, assetId })
      : skipToken,
    staleTime: 1000 * 60 * 10,
  });
  return query;
};
