import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getInterestRate } from "~/api/getInterestRate";

export const useInterestRate = () => {
  return useQuery({
    queryKey: queryKeys.interestRate(),
    queryFn: () => getInterestRate(),
    placeholderData: keepPreviousData,
  });
};
