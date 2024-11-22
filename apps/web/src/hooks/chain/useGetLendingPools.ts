import { WsProvider } from "@polkadot/api";
import {
  formatUnit,
  LendingPool,
  LendingPoolsResponse,
  useActiveAccount,
  useProvider,
} from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";
import { getAssetPrice, useGetAssetPrice } from "./useGetAssetPrice";

interface RawAsset {
  id: number;
  asset_id: number;
  asset: number[];
  asset_decimals: number;
  asset_icon: number[];
  asset_symbol: number[];
  collateral_q: string;
  utilization: string;
  borrow_apy: string;
  borrow_apy_s: string;
  supply_apy: string;
  supply_apy_s: string;
  is_activated: boolean;
  user_asset_balance: number | null;
  is_collateral: boolean | null;
}
interface Asset {
  id: number;
  asset: string;
  asset_decimals: number;
  asset_symbol: string;
  asset_icon: string;
  collateral_q: string;
  utilization: string;
  borrow_apy: string;
  borrow_apy_s: string;
  supply_apy: string;
  supply_apy_s: string;
  is_activated: boolean;
  user_asset_balance: bigint;
  is_collateral: boolean;
}
interface RawSummary {
  total_supply: number;
  total_borrow: number;
}

export type PoolsRawAssetData = [RawAsset[], RawSummary];

export interface UseGetLendingPoolsParams {
  asset?: number | string;
  account?: string;
}

export type LendingPoolsReturnType = {
  assets: Asset[];
  summary: {
    total_borrow: bigint;
    total_supply: bigint;
  };
};

export const useGetLendingPools = ({
  account,
  asset,
}: UseGetLendingPoolsParams = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  const isEnabled = !!provider;

  const finalAccount = activeAccount?.address
    ? activeAccount?.address
    : account;

  const query = useQuery({
    queryKey: queryKeys.lendingPools({ asset, account: finalAccount }),
    queryFn: isEnabled
      ? () =>
          getLendingPool({
            provider,
            account: finalAccount,
            asset,
          })
      : skipToken,
    refetchIntervalInBackground: true,
    refetchInterval: 30,
    refetchOnWindowFocus: "always",
    refetchOnMount: "always",
  });

  return query;
};

export const getLendingPool = async ({
  provider,
  account,
  asset,
}: { provider: WsProvider } & UseGetLendingPoolsParams) => {
  const result = await provider.send<PoolsRawAssetData>(
    "lending_getLendingPools",
    [Number(asset), account]
  );

  const toAssetsJson: Asset[] = result[0].map((asset) => ({
    asset: String.fromCharCode(...asset.asset),
    asset_decimals: asset.asset_decimals,
    asset_icon: String.fromCharCode(...asset.asset_icon),
    asset_symbol: String.fromCharCode(...asset.asset_symbol),
    user_asset_balance: BigInt(asset.user_asset_balance || 0),
    borrow_apy: asset.borrow_apy,
    borrow_apy_s: asset.borrow_apy_s,
    collateral_q: asset.collateral_q,
    id: asset.asset_id,
    is_activated: asset.is_activated,
    supply_apy: asset.supply_apy,
    supply_apy_s: asset.supply_apy_s,
    utilization: asset.utilization,
    is_collateral: Boolean(asset.is_collateral),
  }));

  const summary = {
    total_borrow: BigInt(result[1].total_borrow),
    total_supply: BigInt(result[1].total_supply),
  };

  return {
    assets: toAssetsJson,
    summary,
  };
};
