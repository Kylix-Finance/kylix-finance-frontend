import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useProvider } from "../useProvider";
import { LendingLendingPool } from "../../types/query";
interface Params {
  assetId: number | string;
}

export const usePool = ({ assetId }: Params) => {
  const { data } = useProvider();
  const enabled = data?.api;
  return useQuery({
    queryKey: queryKeys.poolData(+assetId),
    queryFn: enabled
      ? async () => {
          const pool = await data.api.query.lending.lendingPoolStorage(assetId);
          return pool.toJSON() as unknown as LendingLendingPool;
        }
      : skipToken,
  });
};
