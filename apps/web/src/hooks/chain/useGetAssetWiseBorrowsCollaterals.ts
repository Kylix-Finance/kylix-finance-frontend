import { WsProvider } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface AssetInfo {
  assetId: number;
  assetSymbol: string;
  assetName: string;
  decimals: number;
  assetIcon: string;
  balance: string;
}

interface Asset {
  assetInfo: AssetInfo;
  apy?: string;
  borrowed?: string;
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
};

type AssetWiseBorrowsCollateralsResponse = (Asset[] | bigint)[];

export const useGetAssetWiseBorrowsCollaterals = () => {
  const { provider } = useProvider();
  const { activeAccount } = useActiveAccount();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.assetWiseBorrowsCollaterals(activeAccount?.address),
    queryFn:
      provider && activeAccount?.address
        ? () =>
            getAssetWiseBorrowsCollaterals({
              provider,
              account: activeAccount.address,
            })
        : skipToken,
  });

  return {
    data,
    isLoading,
  };
};

export const getAssetWiseBorrowsCollaterals = async ({
  provider,
  account,
}: {
  provider: WsProvider;
  account: string | undefined;
}): Promise<AssetWiseBorrowsCollateralsResponse> => {
  if (!account) return [];

  const response = await provider.send<RawAsset[][] | bigint[]>(
    "getAssetWiseBorrowsCollaterals",
    [account]
  );

  return response.map((group) => {
    if (Array.isArray(group)) {
      return group.map((asset) => ({
        assetInfo: {
          assetId: asset.asset_id,
          assetSymbol: String.fromCharCode(...asset.asset_symbol),
          assetName: String.fromCharCode(...asset.asset_name),
          decimals: asset.decimals,
          assetIcon: String.fromCharCode(...asset.asset_icon),
          balance: asset.balance.toLocaleString(),
        },
        apy: asset.apy ? asset.apy.toLocaleString() : undefined,
        borrowed: asset.borrowed ? asset.borrowed.toLocaleString() : undefined,
      }));
    } else {
      return BigInt(group);
    }
  });
};
