import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "~/lib/axios";
export type PoolDataSchema = [number, number, number, number];

export const usePoolsData = (assetId: string) => {
  return useQuery({
    queryKey: queryKeys.poolsData(assetId),
    queryFn: () => getPoolData(assetId),
    placeholderData: keepPreviousData,
  });
};

const getPoolData = async (assetId: string) => {
  const endTime = Date.now();
  const { data } = await axios.get<PoolDataSchema[]>("/pools_data", {
    params: {
      end_time: endTime,
      scale: "1d",
      limit: 20,
      asset_id: assetId,
    },
  });

  const transformedData = data.map((dataset) => ({
    time: +dataset[1],
    totalBorrow: dataset[2],
    totalSupply: dataset[3],
  }));

  return transformedData;
};
