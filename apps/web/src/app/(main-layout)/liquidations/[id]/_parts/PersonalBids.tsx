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
  const { id } = useParams<{ id: string }>();
  const { data: userBids } = useGetUserBids({ assetId: id });

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
    <Card className="min-h-96 max-h-96" title="My Bids">
      <Table
        components={{
          asset: (item) => (
            <Asset
              helperText=""
              label={item.asset}
              symbol={item.bidAsset.assetSymbol}
            />
          ),
          amount: (item) => (
            <Typography className="dark:text-primary-100" variant="subtitle1">
              {item.amount}
            </Typography>
          ),
          discount: (item) => (
            <Typography className="dark:text-primary-100" variant="subtitle1">
              {item.discount}%
            </Typography>
          ),
          filled: (item) => (
            <Typography className="dark:text-primary-100" variant="subtitle1">
              {item.filled}
            </Typography>
          ),
          actions: (item) => (
            <CancelBidButton
              assetId={item.marketAsset.assetId}
              discount={item.discount}
              txBlockNumber={item.blockNumber}
              txIndex={item.txIndex}
            />
          ),
        }}
        data={tableData}
        defaultSortKey="asset"
        hasPagination={false}
        headers={{
          asset: "Asset",
          amount: "Amount",
          discount: "Discount",
          filled: "Filled",
          actions: "",
        }}
        hiddenTHeads={["actions"]}
        isFetched={true}
        isLoading={false}
        placeholderLength={3}
        rowSpacing="10px"
        tableName="personalBids"
        tCellClassnames="!p-3"
        tContainerProps={{
          className: "overflow-y-auto",
        }}
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
