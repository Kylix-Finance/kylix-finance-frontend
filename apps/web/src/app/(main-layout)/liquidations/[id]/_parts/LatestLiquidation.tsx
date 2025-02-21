"use client";
import { Box, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { useParams } from "next/navigation";
import { Card } from "~/components";
import { useRecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import { formatDateWithTime } from "~/utils/date";

const LatestLiquidation = () => {
  const { assetId } = useParams<{ assetId: string }>();
  const { data, isLoading, isFetched } = useRecentLiquidation(assetId);

  return (
    <Card title="Recent liquidation" className="min-h-96 max-h-96">
      <Table
        isFetched={isFetched}
        isLoading={isLoading}
        placeholderLength={3}
        tContainerProps={{
          className: "overflow-y-auto",
        }}
        tCellClassnames={"font-number"}
        rowSpacing="10px"
        components={{
          time: (item) => {
            return (
              <Box className="flex items-center  text-primary-800 dark:text-primary-100">
                <Typography variant="subtitle2">
                  {formatDateWithTime(item.time)}
                </Typography>
              </Box>
            );
          },
          liquidated: (item) => (
            <Typography
              variant="body1"
              className=" text-primary-800 dark:text-primary-100"
            >
              {item.assetAmountLiquidated}
            </Typography>
          ),
          paid: (item) => (
            <Typography
              variant="body1"
              className=" text-primary-500 dark:text-primary-100"
            >
              {item.usdtAmountPaid}
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
                {item.averagePrice}
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
        data={data || []}
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
