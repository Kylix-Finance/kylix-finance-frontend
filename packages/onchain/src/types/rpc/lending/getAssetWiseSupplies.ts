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

export type AssetWiseSuppliesSchema = Definition<Params, Response>
export type GetAssetWiseSupplies = RPCMethod<AssetWiseSuppliesSchema>