import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getKylixPrice } from "~/api/getKylixPrice";
import { ChartScale } from "~/types";

export const useKylixPrice = (scale: ChartScale) => {
  return useQuery({
    queryKey: queryKeys.kylixPrice(scale),
    queryFn: () => getKylixPrice(scale),
    placeholderData: keepPreviousData,
  });
};
