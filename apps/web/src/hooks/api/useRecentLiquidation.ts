import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getRecentLiquidation } from "~/api/getRecentLiquidation";

export const useRecentLiquidation = (assetId: string) => {
  return useQuery({
    queryKey: queryKeys.recentLiquidation({ assetId }),
    queryFn: () => getRecentLiquidation(assetId),
    placeholderData: keepPreviousData,
  });
};
