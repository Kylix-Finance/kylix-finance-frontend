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
  apy?: string;
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
  apy?: string;
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
}: {
  poolId?: string | number;
} = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  const isEnabled = provider && !!activeAccount?.address;

  const query = useQuery({
    queryKey: queryKeys.assetWiseBorrowsCollaterals(
      activeAccount?.address,
      poolId
    ),
    queryFn: isEnabled
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
          ...data?.borrowedAssets.filter((item) => item.assetId == poolId),
        },
        collateralAssets: {
          ...data?.collateralAssets.filter((item) => item.assetId == poolId),
        },
      };
    },
  });

  return {
    ...query,
    isFetched: isEnabled === false ? true : query.isFetched,
    isLoading: query.isLoading,
  };
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
  >("lending_getAssetWiseBorrowsCollaterals", [account]);

  return {
    borrowedAssets: response[0]?.map((item) => ({
      assetIcon: decodeArrayToString(item.asset_icon),
      assetName: decodeArrayToString(item.asset_name),
      assetSymbol: decodeArrayToString(item.asset_symbol),
      balance: BigInt(item.balance),
      borrowed: BigInt(item.borrowed || 0),
      apy: item.apy,
      assetId: item.asset_id,
      decimals: item.decimals,
      usdtBalance: BigInt(item.usdt_balance),
    })),
    collateralAssets: response[1]?.map((item) => ({
      assetIcon: decodeArrayToString(item.asset_icon),
      assetName: decodeArrayToString(item.asset_name),
      assetSymbol: decodeArrayToString(item.asset_symbol),
      balance: BigInt(item.balance),
      assetId: item.asset_id,
      decimals: item.decimals,
      usdtBalance: BigInt(item.usdt_balance),
    })),
    totalBorrowed: BigInt(response?.[2] || 0),
    totalCollateral: BigInt(response?.[3] || 0),
  };
};
