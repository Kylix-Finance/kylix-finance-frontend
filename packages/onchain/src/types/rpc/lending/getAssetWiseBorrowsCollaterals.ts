import { Definition, RPCMethod } from "../definitions";

type Params = [account: number]

type AssetInfo = {
    assetId: number;
    assetSymbol: string;
    assetName: string;
    decimals: number;
    assetIcon: string;
    balance: string;
    usdtBalance: number;
};

type ExpandedAssetInfo = {
    assetInfo: AssetInfo;
    apy: string;
    borrowed: number;
};

type Response = [
    AssetInfo[],
    ExpandedAssetInfo[],
    bigint,
    bigint
];

export type AssetWiseBorrowsCollateralsSchema = Definition<Params, Response>
export type GetAssetWiseBorrowsCollaterals = RPCMethod<AssetWiseBorrowsCollateralsSchema>