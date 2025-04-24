import { queryKeys } from "@repo/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "~/lib/axios"
export type InterestRateSchema = {
  borrow_apy: number;
  supply_apy: number;
  utilization_rate: number;
};
export const useInterestRate = () => {
  return useQuery({
    queryKey: queryKeys.interestRate(),
    queryFn: getInterestRate,
    placeholderData: keepPreviousData,
    refetchOnMount: true,
    meta: {
      excludeFromGlobalInvalidation: true,
    },
  });
};
const getInterestRate = async () => {
  const { data } = await axios.get<InterestRateSchema[]>(
    "/interest_rate_model"
  );

  return data;
};
