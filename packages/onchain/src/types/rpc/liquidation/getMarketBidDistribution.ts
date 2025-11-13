import { Definition } from "../definitions";

type Params = [market_asset_id: string | number];

export type DiscountDistribution = {
  discount: number;
  amount: bigint;
};

type MetaData = {
  supported_discounts: number[];
};

type Response = [MetaData, DiscountDistribution[]];

export type GetMarketBidDistribution = Definition<Params, Response>;
