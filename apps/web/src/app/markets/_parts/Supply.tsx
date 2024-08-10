"use client";

import { Typography } from "@mui/material";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { Skeleton } from "@repo/ui";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

const Supply = () => {
  const { totalSupply } = useGetLendingPools();

  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          <Skeleton minWidth={80} isLoading={!totalSupply}>
            {totalSupply ? `$ ${totalSupply.toLocaleString()}` : "Unavailable"}
          </Skeleton>
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
