"use client";

import { Box } from "@mui/material";
import { ComponentProps, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import "chart.js/auto";
import { ChartScale } from "~/types";
import { getTimeUnit } from "~/utils/date";
import { useLocalStorage } from "usehooks-ts";
import { hexToRgb } from "@repo/utils";
import { useIsDarkMode } from "@repo/ui";
type LineProps = ComponentProps<typeof Line>;

type MultiLineChartProps = {
  datasets: LineProps["data"]["datasets"];
  xLabel?: string;
  yLabel?: string;
  xGrid?: boolean;
  yGrid?: boolean;
  scale: ChartScale;
  gradientIndex?: number;
};

export const MultiLineChart = ({
  datasets,
  xLabel,
  yLabel,
  xGrid = false,
  yGrid = true,
  scale,
  gradientIndex = 0,
}: MultiLineChartProps) => {
  const unit = getTimeUnit(scale);
  const idDarkMode = useIsDarkMode();

  const color = idDarkMode ? "#daeeea10" : "#daeeea70";

  return (
    <Box height={280} width="100%" className="bg-white dark:bg-black-800">
      <Line
        data={{
          datasets: datasets.map((data, index) => ({
            ...data,
            fill: gradientIndex === index ? "start" : "",
            backgroundColor: (context) => {
              if (!context.chart.chartArea) return;
              const {
                ctx,
                chartArea: { top, bottom },
              } = context.chart;
              const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
              const { b, g, r } = hexToRgb(
                data.backgroundColor?.toString() || ""
              );
              gradientBg.addColorStop(0, `rgba(${r},${g},${b}, 0.4)`);
              gradientBg.addColorStop(1, `rgba(${r},${g},${b}, 0)`);
              return gradientBg;
            },
          })),
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
                color,
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
          animation: {
            duration: 300,
          },
          maintainAspectRatio: false,
        }}
      />
    </Box>
  );
};
