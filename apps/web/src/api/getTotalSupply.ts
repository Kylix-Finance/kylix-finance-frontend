import axios from "~/lib/axios";
import { TotalSupplySchema } from "~/types";

type GetTotalSupply = {
  startDate: string;
  endDate: string;
};

export const getTotalSupply = async ({
  startDate,
  endDate,
}: GetTotalSupply) => {
  const data = await axios.get<TotalSupplySchema[]>("/total_supply_borrow", {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  });
  return data;
};
