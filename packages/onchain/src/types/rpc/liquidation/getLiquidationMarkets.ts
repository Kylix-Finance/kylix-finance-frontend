import { Definition } from "../definitions";

type Params = [account: string | null];

type LiquidationMarket = {
  asset_id: number;
  asset_name: string;
  asset_symbol: string;
  asset_decimals: number;
  bid_asset: number;
  bid_asset_decimals: number;
  tvl: bigint;
  health: number;
  pool_size: bigint;
  max_discount: string;
  user_bid: null | bigint;
};

type Response = LiquidationMarket[];

export type GetLiquidationMarkets = Definition<Params, Response>;
