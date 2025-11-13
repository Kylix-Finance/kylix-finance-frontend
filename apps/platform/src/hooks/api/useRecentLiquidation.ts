import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "~/lib/axios";
export type RecentLiquidationResponse = [
  number,
  number,
  number,
  number,
  number,
  number,
];
export type RecentLiquidation = NonNullable<
  ReturnType<typeof useRecentLiquidation>["data"]
>[number];
export const useRecentLiquidation = (assetId: string | number) => {
  return useQuery({
    queryKey: queryKeys.recentLiquidation({ assetId: assetId.toString() }),
    queryFn: () => getRecentLiquidation(assetId.toString()),
    placeholderData: keepPreviousData,
  });
};
const getRecentLiquidation = async (assetId: string) => {
  const endTime = Date.now();

  const { data } = await axios.get<RecentLiquidationResponse[]>(
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
