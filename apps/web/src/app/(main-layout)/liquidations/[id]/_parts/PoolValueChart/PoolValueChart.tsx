"use client";

import { Box, Typography } from "@mui/material";
import { formatUnit, useMetadata } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";
import { useParams } from "next/navigation";
import { TokenIcon } from "~/components";
import BarChart from "~/components/Charts/BarChart";
import { useGetMarketBidDistribution } from "~/hooks/chain/useGetMarketBidDistribution";
import { liquidatedEmptied } from "~/mock/chart";

export const PoolValueChart = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMarketBidDistribution({ assetId: id });

  const { assetMetaData, isFetched } = useMetadata(id);

  const distribution = data?.[1].map((item) => ({
    discount: item.discount + "%",
    amount: +formatUnit(item.amount, 6),
  }));

  return (
    <Box className="flex-1 p-6 border rounded-md w-full z-[999] dark:bg-black-500 dark:border-transparent">
      <Box className="flex items-center mb-10">
        <Box className="-mr-4" height={32} width={32}>
          {assetMetaData?.name && <TokenIcon symbol={assetMetaData.name} />}
        </Box>
        <Box className="mr-2">
          <TokenIcon symbol="usdt" />
        </Box>
        <Typography className="dark:text-primary-100 flex" variant="body2">
          Bid for liquidated{" "}
          <Skeleton className="mx-2" isLoading={!isFetched} width={50}>
            {assetMetaData?.name}
          </Skeleton>{" "}
          using USDT
        </Typography>
      </Box>
      <BarChart
        data={distribution}
        gradient={{ start: "#45A996", end: "#A67B97" }}
        height={250}
        maxBarThickness={30}
        parsing={{
          xAxisKey: "discount",
          yAxisKey: "amount",
        }}
        type="category"
        yLabel="Pool Value"
      />

      <BarChart
        data={liquidatedEmptied}
        gradient={{ start: "#C0D2CFCC", end: "#CCBDC7CC" }}
        height={90}
        maxBarThickness={8}
        parsing={{
          xAxisKey: "percentage",
          yAxisKey: "value",
        }}
        reverse={true}
        x={false}
        yLabel="Time Emptied"
      />
    </Box>
  );
};
