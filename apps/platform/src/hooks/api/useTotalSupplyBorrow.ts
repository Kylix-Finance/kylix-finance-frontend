import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { ChartScale } from "~/types";
import axios from "~/lib/axios";
export type TotalSupplySchema = [number, number, number];

export const useTotalSupplyBorrow = (scale: ChartScale) => {
  return useQuery({
    queryKey: queryKeys.totalSupply(scale),
    queryFn: () => getTotalSupplyBorrow(scale),
  });
};

const getTotalSupplyBorrow = async (scale: ChartScale) => {
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
