import { GetMarketBidDistribution } from "./getMarketBidDistribution";
import { GetLiquidationMarkets } from "./getLiquidationMarkets";
import { GetUserBids } from "./getUserBids";
export type Liquidation = {
  getLiquidationMarkets: GetLiquidationMarkets;
  getMarketBidDistribution: GetMarketBidDistribution;
  getUserBids: GetUserBids;
};
