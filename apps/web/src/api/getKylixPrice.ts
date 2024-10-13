import { getUnixTime } from "date-fns";
import axios from "~/lib/axios";
import { ChartScale, kylixPriceSchema } from "~/types";

export const getKylixPrice = async (scale: ChartScale) => {
  const endTime = getUnixTime(new Date());

  const { data } = await axios.get<kylixPriceSchema[]>("/kylix_token", {
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
