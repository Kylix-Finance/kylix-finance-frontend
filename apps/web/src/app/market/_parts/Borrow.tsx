"use client";
import { Typography } from "@mui/material";
import { useGetLendingPools } from "@repo/onchain-utils";
import { Icons } from "~/assets/svgs";
import { Card } from "~/components";
import Skeleton from "~/components/Skeleton";

const Borrow = () => {
  const { totalBorrow, isLoading } = useGetLendingPools();

  return (
    <Card
      title="Total Supply"
      icon={Icons.WalletFill}
      rightComponent={
        <Typography variant="h5" className="text-primary-800">
          <Skeleton isLoading={isLoading} minWidth={80}>
            {totalBorrow !== undefined
              ? `$ ${totalBorrow.toLocaleString()}`
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
