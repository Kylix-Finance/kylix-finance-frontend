"use client";
import { Button } from "@mui/material";
import { useMetadata } from "@repo/onchain-utils";
import React, { useEffect } from "react";
import { useBorrow } from "~/hooks/chain/useBorrow";
import { usePools } from "~/hooks/chain/usePools";

export default function Page() {
  const { mutate: borrow, data } = useBorrow();
  // const { pools } = usePools();
  // const { assetMetaData } = useMetadata(9)
  // console.log(assetMetaData);

  const handleBorrow = () => {
    borrow({
      asset: 9,
      balance: "1",
      collateralAsset: 8,
      collateralBalance: "10",
    });

    console.log(data);
  };
  return (
    <Button variant="contained" onClick={handleBorrow}>
      Borrow
    </Button>
  );
}
