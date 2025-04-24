import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared/src/constants";
import { Config } from "src/types";

export const useConfig = () => {
  return useQuery({
    queryKey: queryKeys.config,
    queryFn: () => ({
      dappName: "Kylix",
      rpc: "wss://test-dashboard.kylix.finance",
    }),
  });
};
