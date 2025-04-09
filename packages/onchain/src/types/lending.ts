import {
    u128,
    u32,
    Vec,
    Option,
    Struct,
    Text,
    Tuple,
    Bool,
    Null
} from "@polkadot/types-codec";
import type { Registry } from "@polkadot/types-codec/types";
import type { AccountId } from "@polkadot/types/interfaces";

export interface LendingRpc {
    getAssetPrice: (asset: number, base_asset: number) => Promise<[u128, u32]>;
    getAssetWiseBorrowsCollaterals: (account: AccountId) => Promise<AssetWiseBorrowsCollaterals>;
    getAssetWiseSupplies: (account: AccountId) => Promise<AssetWiseSupplies>;
    getLendingPools: (asset: Option<u32>, account: Option<AccountId>) => Promise<any>
}

interface AssetInfo extends Struct {
    assetId: u32,
    assetSymbol: Text,
    assetName: Text,
    decimals: u32,
    assetIcon: Text,
    balance: u128,
    usdtBalance: u128
}

interface LendingBorrowedAsset extends Struct {
    assetInfo: AssetInfo,
    apy: Text,
    borrowed: u128
}

interface LendingCollateralAsset extends Struct {
    assetInfo: AssetInfo
}
interface LendingSuppliedAsset extends Struct {
    assetInfo: AssetInfo,
    apy: Text,
    supplied: u128,
    isCollateral: Bool
}


interface LendingAggregatedTotals extends Struct {
    totalSupply: u128,
    totalBorrow: u128
}

interface LendingLendingPoolInfo extends Struct {
    id: u128,
    assetId: u32,
    asset: Text,
    assetDecimals: u32,
    assetIcon: Text,
    assetSymbol: Text,
    collateralQ: Text,
    utilization: Text,
    borrowApy: Text,
    borrowApyS: Text,
    totalPoolBorrow: u128,
    supplyApy: Text,
    supplyApyS: Text,
    totalPoolSupply: u128,
    isActivated: Bool,
    userSuppliedBalance: u128,
    userAssetBalance: u128,
    isCollateral: Bool,
}

export interface LendingPoolTuple extends Struct {
    pools: Vec<LendingLendingPoolInfo>,
    totals: LendingAggregatedTotals
}


// interface AssetWiseSupplies extends Tuple {
//     Vec<LendingSuppliedAsset>,
//     u128
// }

class AssetWiseBorrowsCollaterals extends Tuple {
    constructor(registry: Registry, value?: [Vec<LendingBorrowedAsset>, Vec<LendingCollateralAsset>, u128, u128]) {
        super(registry, [
            Vec.with(LendingBorrowedAsset),
            Vec.with(LendingCollateralAsset),
            u128,
            u128
        ], value);
    }
}
