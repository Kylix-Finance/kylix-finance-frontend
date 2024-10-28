import { WsProvider } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
import { decodeArrayToString, queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface Asset {
  assetId: number;
  assetSymbol: string;
  assetName: string;
  decimals: number;
  assetIcon: string;
  balance: bigint;
  apy?: bigint;
  borrowed?: bigint;
  usdtBalance: bigint;
  collateralAssets?: number[];
}

type RawAsset = {
  asset_id: number;
  asset_symbol: number[];
  asset_name: number[];
  decimals: number;
  asset_icon: number[];
  balance: bigint;
  apy?: bigint;
  borrowed?: bigint;
  usdt_balance: bigint;
  collateral_assets: number[];
};

type AssetWiseBorrowsCollateralsResponse = {
  totalBorrowed: bigint;
  totalCollateral: bigint;
  borrowedAssets: Asset[];
  collateralAssets: Asset[];
};

export const useGetAssetWiseBorrowsCollaterals = ({
  poolId,
  collateralId,
}: {
  poolId?: string | number;
  collateralId?: number;
} = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  return useQuery({
    queryKey: queryKeys.assetWiseBorrowsCollaterals(
      activeAccount?.address,
      poolId
    ),
    queryFn:
      provider && activeAccount?.address
        ? () =>
            getAssetWiseBorrowsCollaterals({
              provider,
              account: activeAccount.address,
            })
        : skipToken,
    select: (data) => {
      if (!poolId) return data;
      return {
        totalBorrowed: data?.totalBorrowed,
        totalCollateral: data?.totalCollateral,
        borrowedAssets: {
          ...data?.borrowedAssets.filter(
            (item) =>
              item.assetId == poolId &&
              item.collateralAssets?.includes?.(collateralId || 0)
          ),
        },
        collateralAssets: {
          ...data?.collateralAssets.filter((item) => item.assetId == poolId),
        },
      };
    },
  });
};

export const getAssetWiseBorrowsCollaterals = async ({
  provider,
  account,
}: {
  provider: WsProvider;
  account: string | undefined;
}): Promise<AssetWiseBorrowsCollateralsResponse | undefined> => {
  if (!account) return;

  const response = await provider.send<
    [RawAsset[], RawAsset[], number, number]
  >("getAssetWiseBorrowsCollaterals", [account]);

  return {
    borrowedAssets: response[0]?.map((item) => ({
      assetIcon: decodeArrayToString(item.asset_icon),
      assetName: decodeArrayToString(item.asset_name),
      assetSymbol: decodeArrayToString(item.asset_symbol),
      balance: BigInt(item.balance),
      borrowed: BigInt(item.borrowed || 0),
      apy: BigInt(item.apy || 0),
      assetId: item.asset_id,
      decimals: item.decimals,
      usdtBalance: item.usdt_balance,
      collateralAssets: item.collateral_assets,
    })),
    collateralAssets: response[1]?.map((item) => ({
      assetIcon: decodeArrayToString(item.asset_icon),
      assetName: decodeArrayToString(item.asset_name),
      assetSymbol: decodeArrayToString(item.asset_symbol),
      balance: BigInt(item.balance),
      assetId: item.asset_id,
      decimals: item.decimals,
      usdtBalance: item.usdt_balance,
    })),
    totalCollateral: BigInt(response?.[2] || 0),
    totalBorrowed: BigInt(response?.[3] || 0),
  };
};
