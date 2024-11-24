import { skipToken, useQuery } from "@tanstack/react-query";
import { LendingLendingPool, queryKeys } from "@repo/shared";
import { useProvider } from "@repo/onchain-utils";

interface Props {
  assetId: number | string;
}

export const usePool = ({ assetId }: Props) => {
  const { api } = useProvider();

  const disabled = !!api;

  const { data, ...rest } = useQuery<LendingLendingPool>({
    queryKey: queryKeys.poolData(assetId),
    queryFn: disabled
      ? async () => {
          const poolData = await api?.query?.lending?.lendingPoolStorage?.({
            asset: assetId,
          });

          return poolData?.toJSON() as unknown as LendingLendingPool;
        }
      : skipToken,
  });

  return { pool: data, ...rest };
};
