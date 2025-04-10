export type LendingMethod = "getAssetPrice" | "getAssetWiseBorrowsCollaterals" | "getAssetWiseSupplies" | "getLendingPools" | "getUserLtv"
export type LiquidationMethod = "getLiquidationMarkets" | "getMarketBidDistribution" | "getUserBids"

export type Definition<P extends any[], R extends Record<string, any>> = {
    params: P;
    response: R;
};
