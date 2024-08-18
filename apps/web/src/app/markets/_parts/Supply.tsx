"use client";

import { Typography } from "@mui/material";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { Skeleton } from "@repo/ui";
import { usePools } from "~/hooks/chain/usePools";
import { formatBigNumbers } from "@repo/onchain-utils";

const Supply = () => {
  const { totalSupply } = usePools();

  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          <Skeleton minWidth={80} isLoading={!totalSupply}>
            {totalSupply
              ? formatBigNumbers(totalSupply, 2) + "$"
              : "Unavailable"}
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
