import {
  formatUnit,
  MetadataResult,
  useActiveAccount,
  useProvider,
} from "@repo/onchain-utils";
import { LendingLendingPool } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { assets } from "~/config";

type Pool = {
  balance: string;
  assetName: string;
  collateralQ: string;
  collateral: boolean;
  utilization: string;
  borrowApy: string;
  supplyApy: string;
  walletBalance: number;
  assetId: number;
  poolId: number;
};

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
          const kTokenId = poolData.id;
          const assetMetadata = (
            await api?.query?.assets?.metadata?.(lendTokenId)
          )?.toHuman() as unknown as MetadataResult;

          const requestAssetBalance = await api?.query?.assets?.account?.(
            kTokenId,
            activeAccount?.address
          );

          const assetBalance = requestAssetBalance?.toJSON() as unknown as {
            balance: number | null;
          };

          totalBorrow += BigInt(poolData.borrowedBalance);
          totalSupply += BigInt(poolData.reserveBalance);

          const assetStaticData = assets[lendTokenId.toString()];

          return {
            assetName: assetMetadata.name,
            collateralQ: assetStaticData?.collateralQ,
            utilization: assetStaticData?.utilization,
            borrowApy: assetStaticData?.borrowApy,
            supplyApy: assetStaticData?.supplyApy,
            assetId: lendTokenId,
            poolId: kTokenId,
            balance: formatUnit(
              assetBalance?.balance || 0,
              Number(assetMetadata.decimals)
            ),
          };
        })
      );
      console.log("formattedPools", formattedPools);
      return {
        pools: formattedPools,
        totalBorrow,
        totalSupply,
      } as PoolsResponse;
    },
  });
};
