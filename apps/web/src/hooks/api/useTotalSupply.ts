import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { TotalSupplySchema } from "~/types";
import axios from "~/lib/axios";
import { getTotalSupply } from "~/api/getTotalSupply";

type Params = {
  startDate: string;
  endDate: string;
};

export const useTotalSupply = ({ startDate, endDate }: Params) => {
  return useQuery({
    queryKey: queryKeys.totalSupply({ startDate, endDate }),
    queryFn: () => getTotalSupply({ startDate, endDate }),
    enabled: !!startDate && !!endDate,
  });
};
