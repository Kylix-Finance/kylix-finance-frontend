import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "~/lib/axios";
export type RecentLiquidation = [
  number,
  number,
  number,
  number,
  number,
  number,
];
export const useRecentLiquidation = (assetId: string) => {
  return useQuery({
    queryKey: queryKeys.recentLiquidation({ assetId }),
    queryFn: () => getRecentLiquidation(assetId),
    placeholderData: keepPreviousData,
  });
};
const getRecentLiquidation = async (assetId: string) => {
  const endTime = Date.now();

  const { data } = await axios.get<RecentLiquidation[]>(
    "/recent_liquidations",
    {
      params: {
        end_time: endTime,
        asset_id: assetId,
      },
    }
  );

  const transformedData = data.map((dataset) => ({
    time: +dataset[1],
    assetId: dataset[2],
    assetAmountLiquidated: dataset[3],
    usdtAmountPaid: dataset[4],
    averagePrice: dataset[5],
  }));

  return transformedData;
};
