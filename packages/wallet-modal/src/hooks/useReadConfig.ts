import { useQuery } from "@tanstack/react-query";
import { Config } from "../types";
import { baseKey } from "../constants";
import { queryKeys } from "@repo/constants";

export const useReadConfig = () => {
  return useQuery<Config>({
    queryKey: queryKeys.config,
  });
};
