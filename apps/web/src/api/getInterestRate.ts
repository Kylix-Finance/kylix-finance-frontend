import axios from "~/lib/axios";
import { InterestRateSchema } from "~/types";

export const getInterestRate = async () => {
  const { data } = await axios.get<InterestRateSchema[]>(
    "/interest_rate_model"
  );

  return data;
};
