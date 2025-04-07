"use client";

import { Box, Link, Card as MuiCard, Typography } from "@mui/material";
import { Skeleton } from "@repo/ui";
import React from "react";
import { Icons } from "~/assets/svgs";
import { Card, TokenIcon } from "~/components";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { tvlMockData } from "~/mock/chart";
const Tvl = () => {
  return (
    <Card>
      <Box className="flex items-center">
        <Link href="/srl">
          <Icons.LeftArrow className="text-black" />
        </Link>
        <Box className="p-1.5 flex gap-2 items-center">
          <TokenIcon symbol="USDT" />{" "}
          <Box className="flex flex-col">
            <Typography className="text-primary-800" variant="subtitle2">
              <Skeleton minWidth={20}>USDT</Skeleton>
            </Typography>
          </Box>
        </Box>
      </Box>
      <MuiCard
        className="dark:bg-black-600 flex flex-col gap-2"
        variant="outlined"
      >
        <Box className="flex justify-between w-full">
          <Typography
            className="text-primary-800 dark:text-primary-200"
            variant="subtitle1"
          >
            My self-repaying loan portions simulator
          </Typography>
          {/* <div>LEGEND</div> */}
        </Box>
        <MultiLineChart
          xGrid
          datasets={[
            {
              data: tvlMockData,
              borderColor: palette.primary.main,
              backgroundColor: palette.primary.main,
              tension: 0.5,
              parsing: {
                xAxisKey: "x",
                yAxisKey: "y1",
              },
            },
            {
              data: tvlMockData,
              borderColor: palette.secondary.main,
              backgroundColor: palette.secondary.main,
              tension: 0.5,
              parsing: {
                xAxisKey: "x",
                yAxisKey: "y2",
              },
            },
          ]}
          scale="1d"
          xLabel="Interest rate over time"
          yLabel="Lending and borrowing TVL"
        />
      </MuiCard>
    </Card>
  );
};

export default Tvl;
