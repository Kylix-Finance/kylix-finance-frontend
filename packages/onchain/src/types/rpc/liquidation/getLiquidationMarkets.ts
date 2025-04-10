import { Definition, RPCMethod } from "../definitions";

type Params = [account?: number]

type LendingPoolAsset = {
    assetId: number;
    assetName: string;
    assetSymbol: string;
    assetDecimals: number;
    bidAsset: number;
    bidAssetDecimals: number;
    tvl: bigint;
    health: number;
    poolSize: bigint;
    maxDiscount: string;
    userBid: null | bigint;
};


type Response = LendingPoolAsset[]

export type LiquidationMarketsSchema = Definition<Params, Response>
export type GetLiquidationMarkets = RPCMethod<LiquidationMarketsSchema>