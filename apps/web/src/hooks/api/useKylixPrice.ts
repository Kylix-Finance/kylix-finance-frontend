import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { kylixPriceSchema } from "~/types";

type Params = {
  startDate: string;
  endDate: string;
};

export const useKylixPrice = ({ endDate, startDate }: Params) => {
  return useQuery({
    queryKey: queryKeys.kylixPrice({ endDate, startDate }),
    queryFn: async () => {
      const response = await fetch(
        `http://ec2-16-171-18-46.eu-north-1.compute.amazonaws.com:5000/api/kylix_token?start_date=${startDate}&end_date=${endDate}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = (await response.json()) as kylixPriceSchema[];
      return data;
    },
    enabled: !!startDate && !!endDate,
  });
};
