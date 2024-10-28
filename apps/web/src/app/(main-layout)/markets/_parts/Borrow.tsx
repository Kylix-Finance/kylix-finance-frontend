"use client";
import { Typography } from "@mui/material";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { usePools } from "~/hooks/chain/usePools";

const Borrow = () => {
  const { data, isLoading } = useGetLendingPools();

  return (
    <Card
      title="Total Borrow"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          <Skeleton isLoading={isLoading} minWidth={80}>
            {data?.summary
              ? formatBigNumbers(formatUnit(data.summary.total_borrow, 18), 2) +
                "$"
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

export default Borrow;
