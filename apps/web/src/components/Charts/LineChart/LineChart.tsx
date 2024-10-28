"use client";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import { Box } from "@mui/material";
import { ChartScale } from "~/types";
import { getTimeUnit } from "~/utils/date";

type LineChartProps = {
  scale: ChartScale;
  data?: Record<string, string | number>[];
  parsing: {
    xAxisKey: string;
    yAxisKey: string;
  };
};

const LineChart = ({ data, parsing, scale }: LineChartProps) => {
  const unit = getTimeUnit(scale);

  return (
    <Box height={180} width="100%">
      <Line
        data={{
          datasets: [
            {
              data,
              parsing,
              fill: "origin",
              borderColor: palette.primary.main,
              hoverBackgroundColor: palette.primary.main,
              backgroundColor: (context) => {
                if (!context.chart.chartArea) return;
                const {
                  ctx,
                  chartArea: { top, bottom },
                } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, "rgba(69, 169, 150, 0.2)");
                gradientBg.addColorStop(1, "rgba(69, 169, 150, 0)");
                return gradientBg;
              },
              tension: 0.1, // Smoothing of the line
            },
          ],
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
              callbacks: {
                labelColor: function (context) {
                  return {
                    borderColor: palette.primary.main,
                    backgroundColor: palette.primary.main,
                    borderWidth: 1,
                    borderRadius: 0,
                  };
                },
              },
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
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: palette.text.disabled,
                autoSkip: true,
                align: "inner",
                maxTicksLimit: 11,
              },
            },
            y: {
              display: true,
              beginAtZero: false,
              grid: {
                drawTicks: false,
              },
              border: {
                display: false,
                dash: [8, 8],
              },
              ticks: {
                color: palette.text.disabled,
                count: 4,
                callback: (value, index) => {
                  if (index === 0 || !data) return;
                  return formatNumber(value);
                },
                // padding: 10,
              },
              afterDataLimits: (axis) => {
                const padding = 0.15;
                axis.min -= axis.min * padding;
                axis.max += axis.max * padding;
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

export default LineChart;
