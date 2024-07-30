"use client";

import { useEffect, useState } from "react";
import { useRead } from "./useRead";
import { LendingPool } from "../types";

export const useGetLendingPools = () => {
  const [lendingPool, setLendingPool] = useState<LendingPool[] | undefined>(
    undefined
  );
  const [totalBorrow, setTotalBorrow] = useState<number | undefined>(undefined);
  const [totalSupply, setTotalSupply] = useState<number | undefined>(undefined);
  const { data, isLoading } = useRead<"getLendingPools">("getLendingPools", []);

  useEffect(() => {
    setLendingPool(data?.[0]);
    setTotalBorrow(data?.[1].total_borrow);
    setTotalSupply(data?.[1].total_supply);
  }, [data]);
  return {
    lendingPool,
    totalBorrow,
    totalSupply,
    isLoading,
  };
};
