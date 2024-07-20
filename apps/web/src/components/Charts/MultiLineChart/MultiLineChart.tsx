"use client";

import { Box } from "@mui/material";
import { TypedChartComponent } from "node_modules/react-chartjs-2/dist/types";
import { ComponentProps } from "react";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";

type LineProps = ComponentProps<typeof Line>;

type MultiLineChartProps = {
  datasets: LineProps["data"]["datasets"];
};

export const MultiLineChart = ({ datasets }: MultiLineChartProps) => {
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
                unit: "day",
                tooltipFormat: "MMM dd",
                displayFormats: {
                  month: "MMM dd",
                },
              },
              display: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: palette.text.disabled,
                align: "inner",
              },
            },
            y: {
              display: true,
              beginAtZero: false,
              border: {
                display: false,
              },
              ticks: {
                color: palette.text.disabled,
                count: 4,
                callback: (value) => {
                  return formatNumber(value);
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
