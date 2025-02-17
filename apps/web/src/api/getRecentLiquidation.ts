import { getUnixTime } from "date-fns";
import axios from "~/lib/axios";
import { RecentLiquidation } from "~/types";

export const getRecentLiquidation = async (assetId: string) => {
  const endTime = getUnixTime(new Date());

  const { data } = await axios.get<RecentLiquidation[]>(
    "/recent_liquidations",
    {
      params: {
        end_time: endTime,
        step: "1d",
        asset_id: assetId,
      },
    }
  );

  const transformedData = data.map((dataset) => ({
    unixTime: dataset[0] * 1000,
    assetId: dataset[1],
    assetAmountLiquidated: dataset[2],
    usdtAmountPaid: dataset[3],
    averagePrice: dataset[4],
  }));

  return transformedData;
};
