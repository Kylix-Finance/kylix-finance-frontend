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

type SuppliedAssetEntry = {
    assetInfo: AssetInfo;
    apy: string;
    supplied: string;
    isCollateral: boolean;
};

type Response = [
    SuppliedAssetEntry[],
    number
];

export type GetAssetWiseSupplies = Definition<Params, Response>