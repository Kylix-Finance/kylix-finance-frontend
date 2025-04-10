import { Definition } from "../definitions";

type Params = [market_asset_id?: number]

type DiscountDistribution = {
    discount: number;
    amount: string;
};

type MetaData = {
    supported_discounts: number[];
};


type Response = [MetaData, DiscountDistribution]

export type GetLiquidationMarkets = Definition<Params, Response>
