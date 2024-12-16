"use client";

import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Asset } from "~/components";

export const SupplyTable = () => {
  return (
    <Table<TableData[number]>
      isFetched={true}
      isLoading={false}
      placeholderLength={3}
      tCellClassnames={"!p-3"}
      rowSpacing="10px"
      hasPagination={false}
      defaultSortKey="asset"
      headers={{
        asset: "Asset",
        apy: "APY",
        balance: "Balance",
        status: "Status",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => (
          <Typography variant="subtitle1" className="dark:text-black-100">
            {item.apy}
          </Typography>
        ),
        balance: (item) => (
          <Typography variant="subtitle1" className="dark:text-black-100">
            {item.balance}
          </Typography>
        ),
        status: (item) => (
          <Typography variant="subtitle1" className="dark:text-black-100">
            {item.status}
          </Typography>
        ),
        actions: () => (
          <Box className="flex justify-end gap-1">
            <Button variant="outlined">
              <Typography
                className="!text-primary-500"
                variant="subtitle1"
                fontWeight={600}
              >
                Supply
              </Typography>
            </Button>
          </Box>
        ),
      }}
      data={tableData}
    />
  );
};

const tableData = [
  { asset: "Dot", apy: "5%", balance: "0.202", status: "0.001" },
  { asset: "KYL", apy: "2%", balance: "210.2", status: "0.21" },
  { asset: "USDT", apy: "1%", balance: "1200", status: "212" },
];

type TableData = typeof tableData;
