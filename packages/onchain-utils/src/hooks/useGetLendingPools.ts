"use client";

import { useRead } from "./useRead";

export const useGetLendingPools = () => {
  const { data, isLoading } = useRead<"getLendingPools">("getLendingPools", []);

  const lendingPool = data?.[0];
  const totalBorrow = data?.[1].total_borrow;
  const totalSupply = data?.[1].total_supply;

  return {
    lendingPool,
    totalBorrow,
    totalSupply,
    isLoading,
  };
};
