import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUnixTime } from "date-fns";
import { ChartScale } from "~/types";
import axios from "~/lib/axios"
export type KylixPriceSchema = [number, number];

export const useKylixPrice = (scale: ChartScale) => {
  return useQuery({
    queryKey: queryKeys.kylixPrice(scale),
    queryFn: () => getKylixPrice(scale),
    placeholderData: keepPreviousData,
  });
};

const getKylixPrice = async (scale: ChartScale) => {
  const endTime = getUnixTime(new Date());

  const { data } = await axios.get<KylixPriceSchema[]>("/kylix_token", {
    params: {
      end_time: endTime,
      scale,
      limit: 20,
    },
  });

  const transformedData = data.map((dataset) => ({
    time: dataset[0] * 1000,
    price: dataset[1],
  }));

  return transformedData;
};