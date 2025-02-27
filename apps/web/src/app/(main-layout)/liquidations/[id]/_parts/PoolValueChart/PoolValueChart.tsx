"use client";

import { Box, Typography } from "@mui/material";
import { formatUnit, useMetadata } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";
import { useParams } from "next/navigation";
import { Card, TokenIcon } from "~/components";
import BarChart from "~/components/Charts/BarChart";
import { useGetMarketBidDistribution } from "~/hooks/chain/useGetMarketBidDistribution";
import { liquidatedValue, liquidatedEmptied } from "~/mock/chart";

export const PoolValueChart = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMarketBidDistribution({ assetId: id });

  const { assetMetaData, isFetched } = useMetadata(id);

  const distribution = data?.[1].map((item) => ({
    ...item,
    amount: formatUnit(item.amount, 6),
  }));

  return (
    <Box className="flex-1 p-6 border rounded-md w-full z-[999] dark:bg-black-500 dark:border-transparent">
      <Box className="flex items-center mb-10">
        <Box className="-mr-4" width={32} height={32}>
          {assetMetaData?.name && <TokenIcon symbol={assetMetaData.name} />}
        </Box>
        <Box className="mr-2">
          <TokenIcon symbol="usdt" />
        </Box>
        <Typography variant="body2" className="dark:text-primary-100 flex">
          Bid for liquidated{" "}
          <Skeleton isLoading={!isFetched} width={50} className="mx-2">
            {assetMetaData?.name}
          </Skeleton>{" "}
          using USDT
        </Typography>
      </Box>
      <BarChart
        height={250}
        gradient={{ start: "#45A996", end: "#A67B97" }}
        data={distribution}
        parsing={{
          xAxisKey: "discount",
          yAxisKey: "amount",
        }}
        maxBarThickness={30}
        yLabel="Pool Value"
      />

      <BarChart
        height={90}
        gradient={{ start: "#C0D2CFCC", end: "#CCBDC7CC" }}
        data={liquidatedEmptied}
        parsing={{
          xAxisKey: "percentage",
          yAxisKey: "value",
        }}
        maxBarThickness={8}
        reverse={true}
        x={false}
        yLabel="Time Emptied"
      />
    </Box>
  );
};
