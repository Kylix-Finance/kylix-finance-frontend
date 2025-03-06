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
    time: +dataset[1],
    assetId: dataset[2],
    assetAmountLiquidated: dataset[3],
    usdtAmountPaid: dataset[4],
    averagePrice: dataset[5],
  }));

  return transformedData;
};
