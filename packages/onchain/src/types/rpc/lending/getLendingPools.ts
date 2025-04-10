import { Definition } from "../definitions";

type Params = {
    asset?: number;
    account?: number;
}
interface PoolTotals {
    totalSupply: bigint;
    totalBorrow: bigint;
}
interface Pool {
    id: number;
    assetId: number;
    asset: string;
    assetDecimals: number;
    assetIcon: string;
    assetSymbol: string;
    collateralQ: string;
    utilization: string;
    borrowApy: string;
    borrowApyS: string;
    totalPoolBorrow: bigint;
    supplyApy: string;
    supplyApyS: string;
    totalPoolSupply: bigint;
    isActivated: boolean;
    userSuppliedBalance: number | null;
    userAssetBalance: number | null;
    isCollateral: boolean | null;
}

type Response = [Pool[], PoolTotals]
export type GetLendingPools = Definition<Params, Response>