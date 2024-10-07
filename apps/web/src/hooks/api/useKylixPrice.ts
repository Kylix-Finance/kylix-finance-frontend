import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { getKylixPrice } from "~/api/getKylixPrice";

type Params = {
  startDate: string;
  endDate: string;
};

export const useKylixPrice = ({ startDate, endDate }: Params) => {
  return useQuery({
    queryKey: queryKeys.kylixPrice({ startDate, endDate }),
    queryFn: () => getKylixPrice({ startDate, endDate }),
    enabled: !!startDate && !!endDate,
  });
};
