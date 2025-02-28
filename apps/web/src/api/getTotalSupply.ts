import { getUnixTime } from "date-fns";
import axios from "~/lib/axios";
import { ChartScale, SupplyChartDataset, TotalSupplySchema } from "~/types";

export const getTotalSupply = async (scale: ChartScale) => {
  const endTime = Date.now();

  const { data } = await axios.get<TotalSupplySchema[]>(
    "/total_supply_borrow",
    {
      params: {
        end_time: endTime,
        scale,
        limit: 20,
      },
    }
  );

  const transformedData = data.map((dataset) => ({
    time: +dataset[0],
    supply: dataset[1],
    borrow: dataset[2],
  }));

  return transformedData;
};
