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
  apy: string;
  supplied: bigint;
  collateral: boolean;
}

type RawAsset = {
  asset_id: number;
  asset_symbol: number[];
  asset_name: number[];
  decimals: number;
  asset_icon: number[];
  balance: bigint;
  apy: string;
  supplied: bigint;
  is_collateral: boolean | null;
};

type AssetWiseSuppliesResponse = {
  suppliedAssets: Asset[];
  totalSupplied: bigint;
};

export const useGetAssetWiseSupplies = ({
  poolId,
}: {
  poolId?: string | number;
} = {}) => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  const enabled = provider && !!activeAccount?.address;
  const query = useQuery({
    queryKey: queryKeys.assetWiseSupplies(activeAccount?.address),
    queryFn: enabled
      ? () =>
          getAssetWiseSupplies({
            provider,
            account: activeAccount.address,
          })
      : skipToken,
    select: (data) => {
      if (!poolId) return data;
      return {
        totalSupplied: data?.totalSupplied,
        suppliedAssets: {
          ...data?.suppliedAssets.filter((item) => item.assetId == poolId),
        },
      };
    },
  });

  return {
    ...query,
    isFetched: enabled === false ? true : query.isFetched,
  };
};

export const getAssetWiseSupplies = async ({
  provider,
  account,
}: {
  provider: WsProvider;
  account: string | undefined;
}): Promise<AssetWiseSuppliesResponse | undefined> => {
  if (!account) return;

  const response = await provider.send<[RawAsset[], bigint]>(
    "lending_getAssetWiseSupplies",
    [account]
  );

  return {
    suppliedAssets: response[0]?.map((item) => ({
      assetId: item.asset_id,
      assetSymbol: decodeArrayToString(item.asset_symbol),
      assetName: decodeArrayToString(item.asset_name),
      decimals: item.decimals,
      assetIcon: decodeArrayToString(item.asset_icon),
      balance: BigInt(item.balance),
      apy: item.apy,
      supplied: BigInt(item.supplied),
      collateral: Boolean(item.is_collateral),
    })),
    totalSupplied: BigInt(response?.[1] || 0),
  };
};
