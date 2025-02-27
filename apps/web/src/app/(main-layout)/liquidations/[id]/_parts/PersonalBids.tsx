"use client";
import { Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Asset, Card } from "~/components";
import CancelBidButton from "./CancelBidButton/CancelBidButton";
import { useParams } from "next/navigation";
import { useGetUserBids } from "~/hooks/chain/useGetUserBids";
import { useMemo } from "react";
import { formatUnit } from "@repo/onchain-utils";

const PersonalBids = () => {
  const { data: userBids } = useGetUserBids();

  const tableData = useMemo(
    () =>
      (userBids || []).map((item) => {
        return {
          ...item,
          asset: item.bidAsset.assetName,
          amount: formatUnit(item.bidAmount, item.bidAsset.decimals),
          discount: item.discount,
          filled: formatUnit(item.filledAmount, item.bidAsset.decimals),
        };
      }),
    [userBids]
  );

  return (
    <Card title="Your Bids" className="min-h-96 max-h-96">
      <Table
        tContainerProps={{
          className: "overflow-y-auto",
        }}
        tCellClassnames={"!p-3"}
        placeholderLength={3}
        isFetched={true}
        isLoading={false}
        rowSpacing="10px"
        hasPagination={false}
        defaultSortKey="asset"
        hiddenTHeads={["actions"]}
        headers={{
          asset: "Asset",
          amount: "Amount",
          discount: "Discount",
          filled: "Filled",
          actions: "",
        }}
        tableName="personalBids"
        components={{
          asset: (item) => <Asset label={item.asset} helperText="" />,
          amount: (item) => (
            <Typography variant="subtitle1" className="dark:text-primary-100">
              {item.amount}
            </Typography>
          ),
          discount: (item) => (
            <Typography variant="subtitle1" className="dark:text-primary-100">
              {item.discount}
            </Typography>
          ),
          filled: (item) => (
            <Typography variant="subtitle1" className="dark:text-primary-100">
              {item.filled}
            </Typography>
          ),
          actions: (item) => (
            <CancelBidButton
              assetId={item.marketAsset.assetId}
              txBlockNumber={item.blockNumber}
              discount={item.discount}
              txIndex={item.txIndex}
            />
          ),
        }}
        data={tableData}
      />
    </Card>
  );
};

export default PersonalBids;

// const tableData = [
//   { asset: "Dot", amount: "0.202", discount: "8.6%", filled: "10" },
//   { asset: "KYL", amount: "1.87", discount: "3.2%", filled: "39" },
//   { asset: "USDT", amount: "9.63", discount: "1.09%", filled: "40" },
// ];

// type TableData = typeof tableData;
