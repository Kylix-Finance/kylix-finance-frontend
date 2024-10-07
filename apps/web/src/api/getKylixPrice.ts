import axios from "~/lib/axios";
import { kylixPriceSchema } from "~/types";

type GetKylixPrice = {
  startDate: string;
  endDate: string;
};

export const getKylixPrice = async ({ startDate, endDate }: GetKylixPrice) => {
  const { data } = await axios.get<kylixPriceSchema[]>("/kylix_token", {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  });
  return data;
};
