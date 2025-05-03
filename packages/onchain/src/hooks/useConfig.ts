import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared/src/constants";

export const useConfig = () => {
  return useQuery({
    queryKey: queryKeys.config,
    queryFn: () => ({
      dappName: "Kylix",
      rpc: process.env.NEXT_PUBLIC_RPC_END_POINT,
    }),
  });
};
