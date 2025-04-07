"use client";

import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Asset } from "~/components";

export const SupplyTable = () => {
  return (
    <Table
      components={{
        asset: (item) => (
          <Asset helperText="" label={item.asset} symbol={item.asset} />
        ),
        apy: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.apy}
          </Typography>
        ),
        balance: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.balance}
          </Typography>
        ),
        status: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.status}
          </Typography>
        ),
        actions: () => (
          <Box className="flex justify-end gap-1">
            <Button variant="outlined">
              <Typography
                className="!text-primary-500"
                fontWeight={600}
                variant="subtitle1"
              >
                Supply
              </Typography>
            </Button>
          </Box>
        ),
      }}
      data={tableData}
      defaultSortKey="asset"
      hasPagination={false}
      headers={{
        asset: "Asset",
        apy: "APY",
        balance: "Balance",
        status: "Status",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      isFetched={true}
      isLoading={false}
      placeholderLength={3}
      rowSpacing="10px"
      tableName="supply"
      tCellClassnames="!p-3 dark:bg-black-500"
    />
  );
};

const tableData = [
  { asset: "Dot", apy: "5%", balance: "0.202", status: "0.001" },
  { asset: "KYL", apy: "2%", balance: "210.2", status: "0.21" },
  { asset: "USDT", apy: "1%", balance: "1200", status: "212" },
];
