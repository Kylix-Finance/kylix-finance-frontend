"use client";

import { useQuery } from "@tanstack/react-query";
import { Config } from "../../../wallet-modal/src/types";
import { queryKeys } from "@repo/shared/src/constants";

export const useConfig = () => {
  const { data, ...rest } = useQuery<Config>({
    queryKey: queryKeys.config,
    refetchIntervalInBackground: true,
    refetchInterval: 30,
    refetchOnWindowFocus: "always",
    refetchOnMount: "always",
  });

  return {
    ...rest,
    config: data,
  };
};
