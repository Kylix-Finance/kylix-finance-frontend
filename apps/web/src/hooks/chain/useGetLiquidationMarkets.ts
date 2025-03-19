import { WsProvider } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface RawMarket {
  asset_id: string;
  asset_name: string;
  asset_symbol: string;
  bid_asset: string;
  tvl: string;
  health: number;
  pool_size: string;
  max_discount: string;
  user_bid: string | null;
  bid_asset_decimals: bigint;
  asset_decimals: bigint;
}

interface Market {
  assetId: string;
  assetName: string;
  assetSymbol: string;
  bidAsset: string;
  tvl: bigint;
  health: number;
  poolSize: bigint;
  maxDiscount: string;
  userBid: bigint | null;
  bidDecimal: number;
  assetDecimals: number;
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
    "liquidation_getLiquidationMarkets",
    [account]
  );
  console.log("_____________________________result", result);

  const markets: Market[] = result.map((market) => ({
    assetId: market.asset_id,
    assetName: market.asset_name,
    assetSymbol: market.asset_symbol,
    bidAsset: market.bid_asset,
    tvl: BigInt(market.tvl),
    health: market.health,
    poolSize: BigInt(market.pool_size),
    maxDiscount: market.max_discount,
    userBid: market.user_bid ? BigInt(market.user_bid) : null,
    bidDecimal: Number(market.bid_asset_decimals),
    assetDecimals: Number(market.asset_decimals),
  }));
  console.log("_____________________________markets", markets);

  return markets;
};
