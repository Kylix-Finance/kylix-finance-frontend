import { Definition } from "../definitions";

type Params = [account: string, asset?: number];

type AssetInfo = {
  asset_id: number;
  asset_symbol: string;
  asset_name: string;
  decimals: number;
};

type UserBid = {
  market_assetInfo: AssetInfo;
  bid_asset_info: AssetInfo;
  bid_amount: bigint;
  discount: number;
  filled_amount: number;
  blocknumber: number;
  index: number;
};

type Response = UserBid[];

export type GetUserBids = Definition<Params, Response>;
