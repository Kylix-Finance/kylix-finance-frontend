import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { TotalSupplySchema } from "~/types";
import axios from "~/lib/axios";

type Params = {
  startDate: string;
  endDate: string;
};

export const useTotalSupply = ({ endDate, startDate }: Params) => {
  return useQuery({
    queryKey: queryKeys.totalSupply({ endDate, startDate }),
    queryFn: async () => {
      const data = await axios.get<TotalSupplySchema[]>(
        "/total_supply_borrow",
        {
          params: {
            start_date: startDate,
            end_date: endDate,
          },
        }
      );

      return data;
    },
    enabled: !!startDate && !!endDate,
  });
};
