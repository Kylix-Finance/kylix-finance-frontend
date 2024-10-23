"use client";

import { Typography } from "@mui/material";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { Skeleton } from "@repo/ui";
import { usePools } from "~/hooks/chain/usePools";
import {
  formatBigNumbers,
  useAccounts,
  useActiveAccount,
  useProvider,
} from "@repo/onchain-utils";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { useEffect } from "react";

const Supply = () => {
  const { data, isLoading } = useGetLendingPools();
  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          <Skeleton minWidth={80} isLoading={isLoading}>
            {data?.summary
              ? formatBigNumbers(data.summary.total_supply.toString(), 2) + "$"
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
