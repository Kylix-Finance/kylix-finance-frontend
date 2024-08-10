"use client";
import { Typography } from "@mui/material";
import { Skeleton } from "@repo/ui";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import { usePools } from "~/hooks/chain/usePools";

const Borrow = () => {
  const { totalBorrow } = usePools();

  return (
    <Card
      title="Total Borrow"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          <Skeleton isLoading={!totalBorrow} minWidth={80}>
            {totalBorrow ? `$ ${totalBorrow.toLocaleString()}` : "Unavailable"}
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
