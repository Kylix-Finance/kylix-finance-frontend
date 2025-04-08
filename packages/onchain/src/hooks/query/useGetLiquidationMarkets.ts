"use client"
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "../useProvider";
import { useActiveAccount } from "../useActiveAccount";



type UseGetLiquidationMarketsParams = {
  account?: string;
};

export const useGetLiquidationMarkets = ({
  account,
}: UseGetLiquidationMarketsParams = {}) => {
  const { data } = useProvider();
  const { activeAccount } = useActiveAccount();

  const finalAccount = activeAccount?.address || account;

  return useQuery({
    queryKey: queryKeys.liquidationMarkets({ account: finalAccount }),
    queryFn:
      async () => {
        const api = data?.api;
        if (!api) throw new Error('API not initialized');
    
        return {}
      }

  });
};
