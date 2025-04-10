import { Definition } from "../definitions";

type Params = [account: number, asset: number]

type AssetInfo = {
    assetId: number;
    assetSymbol: string;
    assetName: string;
    decimals: number;
};

type UserBid = {
    marketAssetInfo: AssetInfo;
    bidAssetInfo: AssetInfo;
    bidAmount: bigint;
    discount: number;
    filledAmount: number;
    blocknumber: number;
    index: number;
};



type Response = UserBid[];

export type GetUserBids = Definition<Params, Response>
