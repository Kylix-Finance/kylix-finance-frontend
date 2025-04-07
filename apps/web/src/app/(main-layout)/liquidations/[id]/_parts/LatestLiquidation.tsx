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
    <Card className="min-h-96 max-h-96" title="Recent liquidations">
      <Table
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
              className=" text-primary-800 dark:text-primary-100"
              variant="body1"
            >
              {item.assetAmountLiquidated}
            </Typography>
          ),
          paid: (item) => (
            <Typography
              className=" text-primary-500 dark:text-primary-100"
              variant="body1"
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
              <Typography className="dark:text-primary-100" variant="subtitle1">
                {item.averagePrice}
              </Typography>
            </Box>
          ),
        }}
        data={data || []}
        defaultOrder="desc"
        defaultSortKey="time"
        hasPagination={false}
        headers={{
          time: "Time",
          liquidated: assetMetaData?.symbol
            ? `${assetMetaData?.symbol} Liquidated`
            : "Liquidated",
          paid: "USDT",
          price: "Average price",
        }}
        isFetched={isFetched}
        isLoading={isLoading}
        placeholderLength={3}
        rowSpacing="10px"
        tableName="latestLiquidation"
        tCellClassnames="font-number"
        tContainerProps={{
          className: "overflow-y-auto",
        }}
      />
    </Card>
  );
};

export default LatestLiquidation;
