import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { getTotalSupply } from "~/api/getTotalSupply";
import { ChartScale } from "~/types";

export const useTotalSupply = (scale: ChartScale) => {
  return useQuery({
    queryKey: queryKeys.totalSupply(scale),
    queryFn: () => getTotalSupply(scale),
    refetchIntervalInBackground: true,
    refetchInterval: 30,
    refetchOnWindowFocus: "always",
    refetchOnMount: "always",
  });
};
