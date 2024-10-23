"use client";

import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import Image from "next/image";
import { Icons } from "~/assets/svgs";
import { Asset } from "~/components";

const Borrowed = () => {
  return (
    <Table<TableData[number]>
      tCellClassnames={"!p-3"}
      rowSpacing="10px"
      hasPagination={false}
      defaultSortKey="asset"
      headers={{
        asset: "Asset",
        balance: "Balance",
        apy: "APY",
        borrowed: "Borrowed",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.borrowed}</Typography>
        ),
        supplied: (item) => (
          <Typography variant="subtitle1">{item.supplied}</Typography>
        ),
        actions: () => (
          <Box className="flex justify-end gap-1 items-center">
            <Button variant="contained">
              <Typography variant="subtitle1" fontWeight={600}>
                Repay
              </Typography>
            </Button>
            <Button variant="outlined">
              <Typography
                className="!text-primary-500"
                variant="subtitle1"
                fontWeight={600}
              >
                Borrow
              </Typography>
            </Button>
          </Box>
        ),
      }}
      data={tableData}
    />
  );
};

export default Borrowed;
const tableData = [
  { asset: "Dot", apy: "5%", borrowed: "0.202", supplied: "100" },
  { asset: "KYL", apy: "2%", borrowed: "210.2", supplied: "150" },
  { asset: "USDT", apy: "1%", borrowed: "1200", supplied: "212" },
];

type TableData = typeof tableData;
