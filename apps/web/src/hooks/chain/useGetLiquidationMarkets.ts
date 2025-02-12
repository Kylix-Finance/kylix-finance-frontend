import { WsProvider } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface RawMarket {
  assetId: number;
  assetName: string;
  assetSymbol: string;
  bidAsset: number;
  tvl: string;
  health: number;
  poolSize: string;
  maxDiscount: string;
  userBid: string | null;
}

interface Market {
  assetId: number;
  assetName: string;
  assetSymbol: string;
  bidAsset: number;
  tvl: bigint;
  health: number;
  poolSize: bigint;
  maxDiscount: string;
  userBid: bigint | null;
}

type LiquidationMarketsRawData = RawMarket[];

type UseGetLiquidationMarketsParams = {
  account?: string;
};

export const useGetLiquidationMarkets = ({
  account,
}: UseGetLiquidationMarketsParams = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  const enabled = !!provider;
  const finalAccount = activeAccount?.address || account;

  const query = useQuery({
    queryKey: queryKeys.liquidationMarkets({ account: finalAccount }),
    queryFn: enabled
      ? () => getLiquidationMarkets({ provider, account: finalAccount })
      : skipToken,
  });
  return query;
};

export const getLiquidationMarkets = async ({
  provider,
  account,
}: { provider: WsProvider } & UseGetLiquidationMarketsParams): Promise<
  Market[]
> => {
  const result = await provider.send<LiquidationMarketsRawData>(
    "liquidation_market_api_getLiquidationMarkets",
    []
  );
  console.log("_____________________________result", result);

  const markets: Market[] = result.map((market) => ({
    assetId: market.assetId,
    assetName: market.assetName,
    assetSymbol: market.assetSymbol,
    bidAsset: market.bidAsset,
    tvl: BigInt(market.tvl),
    health: market.health,
    poolSize: BigInt(market.poolSize),
    maxDiscount: market.maxDiscount,
    userBid: market.userBid ? BigInt(market.userBid) : null,
  }));
  console.log("_____________________________markets", markets);

  return markets;
};
