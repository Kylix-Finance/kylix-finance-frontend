"use client";

import { Typography } from "@mui/material";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { Skeleton } from "@repo/ui";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

const Supply = () => {
  const { data, isLoading } = useGetLendingPools();
  return (
    <Card
      icon={Icons.WalletFill}
      rightComponent={
        <Typography className="text-primary-800 dark:text-white" variant="h5">
          <Skeleton isLoading={isLoading} minWidth={80}>
            {data?.summary
              ? formatBigNumbers(formatUnit(data.summary.total_supply, 4), 2) +
                "$"
              : "Unavailable"}
          </Skeleton>
        </Typography>
      }
      title="Total Supply"
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
