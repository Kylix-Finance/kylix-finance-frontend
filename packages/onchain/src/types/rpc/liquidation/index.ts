import { getMarketBidDistribution } from "./getMarketBidDistribution"
import { getLiquidationMarkets } from "./getLiquidationMarkets"
import { getUserBids } from "./getUserBids"
export type Liquidation = {
  getLiquidationMarkets: getLiquidationMarkets;
  getMarketBidDistribution: getMarketBidDistribution;
  getUserBids: getUserBids;
};
