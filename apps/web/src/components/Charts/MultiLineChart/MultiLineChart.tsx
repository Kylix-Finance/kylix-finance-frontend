"use client";

import { Box } from "@mui/material";
import { ComponentProps } from "react";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import "chart.js/auto";
import { ChartScale } from "~/types";
import { getTimeUnit } from "~/utils/date";

type LineProps = ComponentProps<typeof Line>;

type MultiLineChartProps = {
  datasets: LineProps["data"]["datasets"];
  xLabel?: string;
  yLabel?: string;
  xGrid?: boolean;
  yGrid?: boolean;
  scale: ChartScale;
};

export const MultiLineChart = ({
  datasets,
  xLabel,
  yLabel,
  xGrid = false,
  yGrid = true,
  scale,
}: MultiLineChartProps) => {
  const unit = getTimeUnit(scale);

  return (
    <Box height={280} width="100%">
      <Line
        data={{
          datasets,
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit,
                tooltipFormat: "MMM dd",
                displayFormats: {
                  month: "MMM dd",
                },
              },
              display: true,
              grid: {
                display: xGrid,
              },
              border: {
                display: false,
              },
              ticks: {
                color: palette.text.disabled,
                align: "inner",
                autoSkip: true,
                maxTicksLimit: 11,
              },
              title: {
                display: true,
                text: xLabel,
                color: palette.text.primary,
                font: {
                  size: 14,
                },
              },
            },
            y: {
              display: true,
              beginAtZero: true,
              border: {
                display: false,
              },
              grid: {
                display: yGrid,
              },
              ticks: {
                color: palette.text.disabled,
                count: 6,
                callback: (value) => {
                  return formatNumber(value);
                },
              },
              title: {
                display: true,
                text: yLabel,
                color: palette.text.primary,
                padding: 20,
                font: {
                  size: 14,
                },
              },
            },
          },
          elements: {
            point: {
              radius: 1,
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </Box>
  );
};
