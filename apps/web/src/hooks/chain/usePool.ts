import { skipToken, useQuery } from "@tanstack/react-query";
import { LendingLendingPool, queryKeys } from "@repo/shared";
import { useProvider } from "@repo/onchain-utils";
import { useRefetch } from "@repo/onchain-utils/src/hooks/useRefetch";

interface Props {
  assetId: number | string;
}

export const usePool = ({ assetId }: Props) => {
  const { api } = useProvider();

  const disabled = !!api;
  useRefetch({
    queries: [
      {
        queryKey: queryKeys.poolData(assetId),
        enabled: disabled,
      },
    ],
  });
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
