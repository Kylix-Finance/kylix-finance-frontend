"use client";

import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { getLendingPool } from "../api/getLendingPools";
import { queryKeys } from "@repo/shared";
import { useRead } from "./useRead";

// export const useGetLendingPools = () => {
//   const { data, isLoading } = useRead<"getLendingPools">("getLendingPools", []);

//   const lendingPool = data?.[0];
//   const totalBorrow = data?.[1].total_borrow;
//   const totalSupply = data?.[1].total_supply;

//   return {
//     lendingPool,
//     totalBorrow,
//     totalSupply,
//     isLoading,
//   };
// };
export const useGetLendingPools = () => {
  const { provider } = useProvider();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.lendingPools,
    queryFn: provider ? () => getLendingPool({ provider }) : skipToken,
  });

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
