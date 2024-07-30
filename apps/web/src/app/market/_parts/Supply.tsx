"use client";

import { Typography } from "@mui/material";
import { useGetLendingPools } from "@repo/onchain-utils";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";

const Supply = () => {
  const { totalSupply } = useGetLendingPools();

  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          {totalSupply !== undefined
            ? `$ ${totalSupply.toLocaleString()}`
            : "Unavailable"}
        </Typography>
      }
    >
      {/* <Typography
        variant="body3"
        className="flex items-center text-primary-800/50"
      >
        <span>Suppliers: </span>
        <span>1,200</span>
      </Typography> */}
    </Card>
  );
};

export default Supply;
