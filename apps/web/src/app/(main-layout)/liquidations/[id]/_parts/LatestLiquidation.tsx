"use client";
import { Box, Typography } from "@mui/material";
import { useMetadata } from "@repo/onchain-utils";
import { Table } from "@repo/ui";
import { useParams } from "next/navigation";
import { Card } from "~/components";
import { useRecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import { formatDateWithTime } from "~/utils/date";

const LatestLiquidation = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isFetched } = useRecentLiquidation(id);
  const { assetMetaData } = useMetadata(id);

  return (
    <Card title="Recent liquidations" className="min-h-96 max-h-96">
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
              {/* <Typography
                variant="subtitle2"
                fontWeight="regular"
                className="py-0.5 p-0.5 bg-primary-500/10 text-primary-500 rounded dark:text-primary-400"
              >
                +75.8%
              </Typography> */}
              <Typography variant="subtitle1" className="dark:text-primary-100">
                {item.averagePrice}
              </Typography>
            </Box>
          ),
        }}
        hasPagination={false}
        defaultSortKey="time"
        defaultOrder="desc"
        headers={{
          time: "Time",
          liquidated: `${assetMetaData?.symbol}-USDT Liquidated`,
          paid: "USDT",
          price: "Average price",
        }}
        tableName="latestLiquidation"
        data={data || []}
      />
    </Card>
  );
};

export default LatestLiquidation;
