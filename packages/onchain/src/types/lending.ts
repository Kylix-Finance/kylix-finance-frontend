import type { u128, u32, Option, Bool, Text } from "@polkadot/types-codec";
import type { AccountId } from "@polkadot/types/interfaces";

export interface LendingRpc {
  // getAssetPrice: (asset: number, base_asset: number) => Promise<[u128, u32]>;
  getAssetWiseBorrowsCollaterals: (
    account: AccountId
  ) => Promise<AssetWiseBorrowsCollaterals>;
  getAssetWiseSupplies: (account: AccountId) => Promise<AssetWiseSupplies>;
  getLendingPools: (
    asset: Option<u32>,
    account: Option<AccountId>
  ) => Promise<LendingPoolTuple>;
}

export interface AssetInfo {
  assetId: u32;
  assetSymbol: Text;
  assetName: Text;
  decimals: u32;
  assetIcon: Text;
  balance: u128;
  usdtBalance: u128;
}

export interface LendingBorrowedAsset {
  assetInfo: AssetInfo;
  apy: Text;
  borrowed: u128;
}

export interface LendingCollateralAsset {
  assetInfo: AssetInfo;
}

export interface LendingSuppliedAsset {
  assetInfo: AssetInfo;
  apy: Text;
  supplied: u128;
  isCollateral: Bool;
}

export interface LendingAggregatedTotals {
  totalSupply: u128;
  totalBorrow: u128;
}

export interface LendingLendingPoolInfo {
  id: u128;
  assetId: u32;
  asset: Text;
  assetDecimals: u32;
  assetIcon: Text;
  assetSymbol: Text;
  collateralQ: Text;
  utilization: Text;
  borrowApy: Text;
  borrowApyS: Text;
  totalPoolBorrow: u128;
  supplyApy: Text;
  supplyApyS: Text;
  totalPoolSupply: u128;
  isActivated: Bool;
  userSuppliedBalance: u128;
  userAssetBalance: u128;
  isCollateral: Bool;
}

export interface LendingPoolTuple {
  pools: LendingLendingPoolInfo[];
  totals: LendingAggregatedTotals;
}

export type AssetWiseSupplies = [LendingSuppliedAsset[], u128];

export type AssetWiseBorrowsCollaterals = [
  LendingBorrowedAsset[],
  LendingCollateralAsset[],
  u128,
  u128,
];
