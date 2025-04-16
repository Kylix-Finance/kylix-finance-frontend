import { Definition } from "../definitions";

type Params = [market_asset_id: string];

type DiscountDistribution = {
  discount: number;
  amount: string;
};

type MetaData = {
  supported_discounts: number[];
};

type Response = [MetaData, DiscountDistribution[]];

export type GetMarketBidDistribution = Definition<Params, Response>;
