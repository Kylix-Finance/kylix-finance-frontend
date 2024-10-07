"use client";
import { Button } from "@mui/material";
import { useMetadata } from "@repo/onchain-utils";
import React, { useEffect } from "react";
import { useKylixPrice } from "~/hooks/api/useKylixPrice";
import { useTotalSupply } from "~/hooks/api/useTotalSupply";
export default function Page() {
  const startDate = "2024-05-01 00:00:00";
  const endDate = "2024-05-02 00:00:00";

  const { data: kylixPrice } = useKylixPrice({
    startDate,
    endDate,
  });
  const { data: totalSupply } = useTotalSupply(30);
  useEffect(() => {
    console.log(kylixPrice);
    console.log(totalSupply);
  }, [kylixPrice, totalSupply]);
  return <></>;
}
