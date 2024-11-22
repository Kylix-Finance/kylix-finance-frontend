import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPoolData } from "~/api/getPoolData";
import { ChartScale } from "~/types";

export const usePoolsData = (assetId: string) => {
  return useQuery({
    queryKey: queryKeys.poolsData(assetId),
    queryFn: () => getPoolData(assetId),
    placeholderData: keepPreviousData,
    refetchIntervalInBackground: true,
    refetchInterval: 30,
    refetchOnWindowFocus: "always",
    refetchOnMount: "always",
  });
};
