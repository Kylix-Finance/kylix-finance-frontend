import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { getTotalSupply } from "~/api/getTotalSupply";

export const useTotalSupply = (days: number) => {
  return useQuery({
    queryKey: queryKeys.totalSupply(days),
    queryFn: () => getTotalSupply(days),
  });
};
