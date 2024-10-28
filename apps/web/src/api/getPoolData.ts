import { getUnixTime } from "date-fns";
import axios from "~/lib/axios";
import { ChartScale, PoolDataSchema } from "~/types";

export const getPoolData = async (assetId: string) => {
  const endTime = getUnixTime(new Date());

  const { data } = await axios.get<PoolDataSchema[]>("/pools_data", {
    params: {
      end_time: endTime,
      scale: "1d",
      limit: 20,
      asset_id: assetId,
    },
  });

  const transformedData = data.map((dataset) => ({
    time: dataset[1] * 1000,
    borrow: dataset[2],
    supply: dataset[3],
    totalBorrow: dataset[4],
    totalSupply: dataset[5],
  }));

  return transformedData;
};