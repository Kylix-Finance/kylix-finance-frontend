"use client";
import { Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Asset, Card } from "~/components";

const PersonalBids = () => {
  return (
    <Card title="Your Bids" className="h-80">
      <Table<TableData[number]>
        tCellClassnames={"!p-3"}
        placeholderLength={3}
        isFetched={true}
        isLoading={false}
        rowSpacing="10px"
        hasPagination={false}
        defaultSortKey="asset"
        headers={{
          asset: "Asset",
          amount: "Amount",
          discount: "Discount",
          filled: "Filled",
        }}
        tableName="personalBids"
        components={{
          asset: (item) => <Asset label={item.asset} helperText="" />,
          amount: (item) => (
            <Typography variant="subtitle1">{item.amount}</Typography>
          ),
          discount: (item) => (
            <Typography variant="subtitle1">{item.discount}</Typography>
          ),
          filled: (item) => (
            <Typography variant="subtitle1">{item.filled}</Typography>
          ),
        }}
        data={tableData}
      />
    </Card>
  );
};

export default PersonalBids;

const tableData = [
  { asset: "Dot", amount: "0.202", discount: "8.6%", filled: "10" },
  { asset: "KYL", amount: "1.87", discount: "3.2%", filled: "39" },
  { asset: "USDT", amount: "9.63", discount: "1.09%", filled: "40" },
];

type TableData = typeof tableData;
