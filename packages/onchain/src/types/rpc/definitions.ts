export type LendingMethod =
  | "getAssetPrice"
  | "getAssetWiseBorrowsCollaterals"
  | "getAssetWiseSupplies"
  | "getLendingPools"
  | "getUserLtv";
export type LiquidationMethod =
  | "getLiquidationMarkets"
  | "getMarketBidDistribution"
  | "getUserBids";

export type Definition<
  P extends any[] = any[],
  R extends Record<string, any> = object,
> = {
  params: P;
  response: R;
};

export type RPCMethod<T extends Definition> = (
  ...args: T["params"]
) => Promise<T["response"]>;
