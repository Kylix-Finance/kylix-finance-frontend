import { Definition } from "../definitions";

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

export type GetAssetWiseBorrowsCollaterals = Definition<Params, Response>
