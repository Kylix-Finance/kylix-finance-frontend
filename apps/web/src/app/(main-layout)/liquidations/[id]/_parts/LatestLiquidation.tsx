"use client";
import { Box, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Card } from "~/components";

const LatestLiquidation = () => {
  return (
    <Card title="Recent liquidation" className="h-80">
      <Table
        isFetched={true}
        isLoading={false}
        placeholderLength={3}
        tCellClassnames={"font-number"}
        rowSpacing="10px"
        components={{
          time: (item) => {
            const date = item.time.split("-")[0];
            const time = item.time.split("-")[1];
            return (
              <Box className="flex items-center  text-primary-800 dark:text-primary-100">
                <Typography variant="subtitle2">{date}- </Typography>
                <Typography>{time}</Typography>
              </Box>
            );
          },
          liquidated: (item) => (
            <Typography
              variant="body1"
              className=" text-primary-800 dark:text-primary-100"
            >
              {item.liquidated}
            </Typography>
          ),
          paid: (item) => (
            <Typography
              variant="body1"
              className=" text-primary-500 dark:text-primary-100"
            >
              {item.paid}
            </Typography>
          ),
          price: (item) => (
            <Box className="flex gap-2 items-center">
              <Typography
                variant="subtitle2"
                fontWeight="regular"
                className="py-0.5 p-0.5 bg-primary-500/10 text-primary-500 rounded dark:text-primary-400"
              >
                +75.8%
              </Typography>
              <Typography variant="subtitle1" className="dark:text-primary-100">
                {item.price}
              </Typography>
            </Box>
          ),
        }}
        hasPagination={false}
        defaultSortKey="time"
        headers={{
          time: "Time",
          liquidated: "kyl.USDT Liquidated",
          paid: "USDT paid",
          price: "Average price",
        }}
        tableName="latestLiquidation"
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
];
