import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useProvider } from "../useProvider";

interface Params {
  assetId: number;
}

export const usePool = ({ assetId }: Params) => {
  const { data } = useProvider();
  const enabled = data?.api;
  return useQuery({
    queryKey: queryKeys.poolData(assetId),
    queryFn: enabled
      ? async () => {
          const pool = await data.api.query.lending.lendingPoolStorage(assetId);
          return pool.toJSON() as unknown;
        }
      : skipToken,
  });
};
