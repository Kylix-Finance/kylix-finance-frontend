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
  collateral_q: number;
  utilization: string;
  borrow_apy: string;
  borrow_apy_s: string;
  supply_apy: string;
  supply_apy_s: string;
  is_activated: boolean;
  user_asset_balance: number | null;
}
interface Asset {
  id: number;
  asset: string;
  asset_decimals: number;
  asset_symbol: string;
  asset_icon: string;
  collateral_q: number;
  utilization: string;
  borrow_apy: string;
  borrow_apy_s: string;
  supply_apy: string;
  supply_apy_s: string;
  is_activated: boolean;
  user_asset_balance: bigint;
}
interface RawSummary {
  total_supply: number;
  total_borrow: number;
}

type RawAssetData = [RawAsset[], RawSummary];

interface Params {
  asset?: number;
  account?: string;
}

export const useGetLendingPools = ({ account, asset }: Params = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();
  return useQuery({
    queryKey: queryKeys.lendingPools,
    queryFn: provider
      ? () =>
          getLendingPool({
            provider,
            account: activeAccount?.address ? activeAccount?.address : account,
            asset,
          })
      : skipToken,
  });
};

export const getLendingPool = async ({
  provider,
  account,
  asset,
}: { provider: WsProvider } & Params) => {
  const result = await provider.send<RawAssetData>("getLendingPools", [
    asset,
    account,
  ]);
  const toAssetsJson: Asset[] = result[0].map((asset) => ({
    asset: String.fromCharCode(...asset.asset),
    asset_decimals: asset.asset_decimals,
    asset_icon: String.fromCharCode(...asset.asset_icon),
    asset_symbol: String.fromCharCode(...asset.asset_symbol),
    user_asset_balance: BigInt(asset.user_asset_balance || 0),
    borrow_apy: asset.borrow_apy,
    borrow_apy_s: asset.borrow_apy_s,
    collateral_q: asset.collateral_q,
    id: asset.id,
    is_activated: asset.is_activated,
    supply_apy: asset.supply_apy,
    supply_apy_s: asset.supply_apy_s,
    utilization: asset.utilization,
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
