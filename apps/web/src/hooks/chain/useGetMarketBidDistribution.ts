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
  assetId: string;
};

export const getMarketBidDistribution = async ({
  provider,
  assetId,
}: { provider: WsProvider } & GetMarketBidDistribution) => {
  const result = await provider.send<DiscountData>(
    "liquidation_getLiquidationMarkets",
    [assetId]
  );

  const transformedResult = {
    ...result,
    distribution: result.distribution.map((item) => ({
      ...item,
      amount: BigInt(item.amount),
    })),
  };

  return transformedResult;
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
  });
  return query;
};
