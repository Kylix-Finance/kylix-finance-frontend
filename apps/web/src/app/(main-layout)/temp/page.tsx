"use client";
import { Button } from "@mui/material";
import { useMetadata } from "@repo/onchain-utils";
import React, { useEffect } from "react";
import { useKylixPrice } from "~/hooks/api/useKylixPrice";
import { useBorrow } from "~/hooks/chain/useBorrow";
import { usePools } from "~/hooks/chain/usePools";

export default function Page() {
  const startDate = "2024-05-01 00:00:00";
  const endDate = "2024-05-02 00:00:00";

  const { data } = useKylixPrice({
    startDate: "2024-05-01 00:00:00",
    endDate: "2024-05-02 00:00:00",
  });
  useEffect(() => {
    console.log(data);
  }, []);
  return <></>;
}
