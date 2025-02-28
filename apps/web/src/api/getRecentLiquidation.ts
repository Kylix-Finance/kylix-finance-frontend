import { getUnixTime } from "date-fns";
import axios from "~/lib/axios";
import { RecentLiquidation } from "~/types";

export const getRecentLiquidation = async (assetId: string) => {
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
    time: dataset[0],
    assetId: dataset[1],
    assetAmountLiquidated: dataset[2],
    usdtAmountPaid: dataset[3],
    averagePrice: dataset[4],
  }));

  return transformedData;
};
