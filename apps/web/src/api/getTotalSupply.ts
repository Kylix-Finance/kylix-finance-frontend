import { subDays } from "date-fns";
import axios from "~/lib/axios";
import { SupplyChartDataset, TotalSupplySchema } from "~/types";
import { toIsoString } from "~/utils/date";

export const getTotalSupply = async (days: number) => {
  const endDate = new Date();
  const startDate = subDays(endDate, days);

  const { data } = await axios.get<TotalSupplySchema[]>(
    "/total_supply_borrow",
    {
      params: {
        start_date: toIsoString(startDate),
        end_date: toIsoString(endDate),
      },
    }
  );

  const MINUTES_IN_DAY = 24 * 60;

  const samples: SupplyChartDataset[] = [];
  for (let i = 0; i < days; i++) {
    const sample = data[i * MINUTES_IN_DAY];
    if (sample)
      samples.push({
        ...sample,
        time: new Date(sample.time),
      });
  }

  return samples;
};
