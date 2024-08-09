import { useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { LendingLendingPool, PalletAssetsAssetMetadata } from "@repo/shared";
import { useActiveAccount } from "./useActiveAccount";

type Pool = {
  assetInfo: PalletAssetsAssetMetadata;
  wallet_balance: number;
} & LendingLendingPool;

interface PoolsResponse {
  pools: Pool[];
  totalBorrow: bigint;
  totalSupply: bigint;
}

export const usePools = () => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  return useQuery({
    queryKey: ["poolsData"],
    enabled: !!api,
    queryFn: async () => {
      const pools = await api?.query?.lending?.lendingPoolStorage?.entries();
      if (!pools) return;
      let totalBorrow = BigInt(0);
      let totalSupply = BigInt(0);
      const formattedPools = await Promise.all(
        pools.map(async ([ـ, value]) => {
          const poolData = value.toJSON() as unknown as LendingLendingPool;
          const lendTokenId = poolData.lendTokenId;
          const assetMetadata =
            await api?.query?.assets?.metadata?.(lendTokenId);
          const requestAssetBalance = await api?.query?.assets?.account?.(
            lendTokenId,
            activeAccount?.address
          );
          const assetBalance = requestAssetBalance?.toJSON() as unknown as {
            balance: number;
          };

          const assetInfo =
            assetMetadata?.toHuman() as unknown as PalletAssetsAssetMetadata;
          totalBorrow += BigInt(poolData.borrowedBalance);
          totalSupply += BigInt(poolData.reserveBalance);
          return {
            wallet_balance: assetBalance.balance,
            assetInfo,
            ...poolData,
          };
        })
      );
      return {
        pools: formattedPools,
        totalBorrow,
        totalSupply,
      } as PoolsResponse;
    },
  });
};
