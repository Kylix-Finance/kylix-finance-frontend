"use client";
import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Card } from "~/components";

const LatestLiquidation = () => {
  return (
    <Card title="Recent liquidation" className="max-h-80">
      <Table<TableData[number]>
        tCellClassnames={"!p-3 font-number"}
        rowSpacing="10px"
        hasPagination={false}
        defaultSortKey="time"
        headers={{
          time: "Time",
          liquidated: "kyl.USDT Liquidated",
          paid: "USDT paid",
          price: "Average price",
        }}
        tableName="latestLiquidation"
        components={{
          time: (item) => {
            const date = item.time.split("-")[0];
            const time = item.time.split("-")[1];
            return (
              <Box className="flex items-center  text-primary-800 ">
                <Typography variant="subtitle2">{date}- </Typography>
                <Typography>{time}</Typography>
              </Box>
            );
          },
          liquidated: (item) => (
            <Typography variant="body1" className=" text-primary-800">
              {item.liquidated}
            </Typography>
          ),
          paid: (item) => (
            <Typography variant="body1" className=" text-primary-500">
              {item.paid}
            </Typography>
          ),
          price: (item) => (
            <Box className="flex gap-2 items-center">
              <Typography
                variant="subtitle2"
                fontWeight="regular"
                className="py-0.5 p-0.5 bg-primary-500/10 text-primary-500 rounded"
              >
                +75.8%
              </Typography>
              <Typography variant="subtitle1">{item.price}</Typography>
            </Box>
          ),
        }}
        data={tableData}
      />
    </Card>
  );
};

export default LatestLiquidation;

const tableData = [
  {
    time: "19 Jul, 2024 - 08:11:33",
    liquidated: "455",
    paid: "89.20",
    price: "0.0124",
  },
  {
    time: "20 Jul, 2024 - 10:15:12",
    liquidated: "342",
    paid: "76.30",
    price: "0.0142",
  },
  {
    time: "21 Jul, 2024 - 12:19:56",
    liquidated: "522",
    paid: "102.50",
    price: "0.0115",
  },
  {
    time: "22 Jul, 2024 - 14:23:41",
    liquidated: "620",
    paid: "120.75",
    price: "0.0120",
  },
  {
    time: "23 Jul, 2024 - 16:28:10",
    liquidated: "415",
    paid: "81.10",
    price: "0.0130",
  },
  {
    time: "24 Jul, 2024 - 18:33:25",
    liquidated: "489",
    paid: "92.35",
    price: "0.0128",
  },
  {
    time: "25 Jul, 2024 - 20:40:02",
    liquidated: "570",
    paid: "115.60",
    price: "0.0118",
  },
  {
    time: "26 Jul, 2024 - 22:45:45",
    liquidated: "498",
    paid: "95.20",
    price: "0.0126",
  },
  {
    time: "27 Jul, 2024 - 09:12:33",
    liquidated: "435",
    paid: "85.45",
    price: "0.0123",
  },
  {
    time: "28 Jul, 2024 - 11:18:21",
    liquidated: "512",
    paid: "100.00",
    price: "0.0121",
  },
];

type TableData = typeof tableData;
