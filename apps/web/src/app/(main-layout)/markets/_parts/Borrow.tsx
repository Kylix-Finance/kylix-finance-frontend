"use client";
import { Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

const Borrow = () => {
  const { data, isLoading } = useGetLendingPools();

  return (
    <Card
      icon={Icons.WalletFill}
      rightComponent={
        <Typography className="text-primary-800 dark:text-white" variant="h5">
          <Skeleton isLoading={isLoading} minWidth={80}>
            {data?.summary
              ? formatBigNumbers(formatUnit(data.summary.total_borrow, 4), 2) +
                "$"
              : "Unavailable"}
          </Skeleton>
        </Typography>
      }
      title="Total Borrow"
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

export default Borrow;
