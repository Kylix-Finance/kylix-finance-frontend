"use client";

import { Box, Button, Switch, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import Image from "next/image";
import { Icons } from "~/assets/svgs";
import { Asset } from "~/components";

const Supplied = () => {
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
        supplied: "Supplied",
        actions: "Action",
      }}
      hiddenTHeads={["actions"]}
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        apy: (item) => <Typography variant="subtitle1">{item.apy}</Typography>,
        balance: (item) => (
          <Typography variant="subtitle1">{item.balance}</Typography>
        ),
        supplied: (item) => (
          <Typography variant="subtitle1">{item.supplied}</Typography>
        ),
        actions: () => (
          <Box className="flex justify-end gap-6 items-center">
            <Switch />
            <Box className="flex justify-end gap-1 items-center">
              <Button variant="contained">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  fontFamily={"Poppins"}
                >
                  Withdraw
                </Typography>
              </Button>
              <Button variant="outlined">
                <Typography
                  className="!text-primary-500"
                  variant="subtitle1"
                  fontWeight={600}
                  fontFamily={"Poppins"}
                >
                  Supply
                </Typography>
              </Button>
            </Box>
          </Box>
        ),
      }}
      data={tableData}
    />
  );
};

export default Supplied;
const tableData = [
  { asset: "Dot", apy: "5%", balance: "0.202", supplied: "100" },
  { asset: "KYL", apy: "2%", balance: "210.2", supplied: "150" },
  { asset: "USDT", apy: "1%", balance: "1200", supplied: "212" },
];

type TableData = typeof tableData;
