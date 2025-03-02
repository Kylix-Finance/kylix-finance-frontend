"use client";

import { Box, Link, Card as MuiCard, Typography } from "@mui/material";
import { Skeleton, useIsDarkMode } from "@repo/ui";
import React from "react";
import { Icons } from "~/assets/svgs";
import { Card, TokenIcon } from "~/components";
import LineChart from "~/components/Charts/LineChart";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { tvlMockData, vaultData } from "~/mock/chart";
const Tvl = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <Card>
      <Box className="flex items-center">
        <Link href="/srl">
          <Icons.LeftArrow className="text-black" />
        </Link>
        <Box className="p-1.5 flex gap-2 items-center">
          <TokenIcon symbol={"USDT"} />{" "}
          <Box className="flex flex-col">
            <Typography variant="subtitle2" className="text-primary-800">
              <Skeleton minWidth={20}>USDT</Skeleton>
            </Typography>
          </Box>
        </Box>
      </Box>
      <MuiCard
        variant="outlined"
        className="dark:bg-black-600 flex flex-col gap-2"
      >
        <Box className="flex justify-between w-full">
          <Typography
            variant="subtitle1"
            className="text-primary-800 dark:text-primary-200"
          >
            My self-repaying loan portions simulator
          </Typography>
          {/* <div>LEGEND</div> */}
        </Box>
        <MultiLineChart
          scale="1d"
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
          xLabel="Interest rate over time"
          yLabel="Lending and borrowing TVL"
          xGrid
        />
      </MuiCard>
    </Card>
  );
};

export default Tvl;
