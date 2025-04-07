import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPoolData } from "~/api/getPoolData";

export const usePoolsData = (assetId: string) => {
  return useQuery({
    queryKey: queryKeys.poolsData(assetId),
    queryFn: () => getPoolData(assetId),
    placeholderData: keepPreviousData,
  });
};
