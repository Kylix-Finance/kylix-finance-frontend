"use client";

import { Box } from "@mui/material";
import { ComponentProps } from "react";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import "chart.js/auto";

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
              type: "linear",
              // time: {
              //   unit: "day",
              //   tooltipFormat: "MMM dd",
              //   displayFormats: {
              //     month: "MMM dd",
              //   },
              // },
              display: true,
              beginAtZero: true,
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
              beginAtZero: true,
              border: {
                display: false,
              },
              ticks: {
                color: palette.text.disabled,
                count: 6,
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
