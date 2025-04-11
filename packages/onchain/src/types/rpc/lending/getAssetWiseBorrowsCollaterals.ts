import { Definition } from "../definitions";

type Params = [account: string]

type AssetInfo = {
    asset_id: number;
    asset_symbol: number[];
    asset_name: number[];
    decimals: number;
    asset_icon: number[];
    balance: string;
    usdt_balance: number;
    apy: string;
    borrowed: number;
};


type Response = [
    AssetInfo[],
    AssetInfo[],
    bigint,
    bigint
];

export type GetAssetWiseBorrowsCollaterals = Definition<Params, Response>
