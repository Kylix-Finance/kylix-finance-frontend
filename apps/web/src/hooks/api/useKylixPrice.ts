import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { kylixPriceSchema } from "~/types";
import axios from "~/lib/axios";

type Params = {
  startDate: string;
  endDate: string;
};

export const useKylixPrice = ({ endDate, startDate }: Params) => {
  return useQuery({
    queryKey: queryKeys.kylixPrice({ endDate, startDate }),
    queryFn: async () => {
      const data = await axios.get<kylixPriceSchema[]>("/kylix_token", {
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      });
      return data;
    },
    enabled: !!startDate && !!endDate,
  });
};
