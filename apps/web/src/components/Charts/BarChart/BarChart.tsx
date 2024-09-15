"use client";
import { Bar } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { Box } from "@mui/material";
import "chart.js/auto";

type BarChartProps = {
  gradient: {
    start: string;
    end: string;
  };
  data: Record<string, string | number>[];
  parsing: {
    xAxisKey: string;
    yAxisKey: string;
  };
  height: number;
  maxBarThickness?: number;
  reverse?: boolean;
  x?: boolean;
};

export const BarChart = ({
  gradient,
  data,
  parsing,
  height,
  maxBarThickness,
  reverse = false,
  x = true,
}: BarChartProps) => {
  return (
    <Box height={height} width="100%">
      <Bar
        data={{
          datasets: [
            {
              maxBarThickness,
              barPercentage: 0.8,
              data,
              parsing,
              borderColor: palette.primary.light,
              backgroundColor: (context) => {
                const { chart, dataIndex } = context;
                const { ctx } = chart;
                const meta = chart.getDatasetMeta(0);
                const bar = meta.data[dataIndex];

                if (!bar) {
                  return;
                }

                const { y = 0, base = 0 } = bar.getProps(["y", "base"], false);

                const gradientBg = ctx.createLinearGradient(0, base, 0, y);
                gradientBg.addColorStop(1, gradient.start);
                gradientBg.addColorStop(0, gradient.end);
                return gradientBg;
              },
              borderRadius: 7,
            },
          ],
        }}
        options={{
          animation: {
            duration: 10,
            onComplete: (context) => {
              context.chart.update();
            },
          },
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
              display: x,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: palette.text.disabled,
                align: "center",
                callback: (value) => value + "%",
              },
            },
            y: {
              reverse,
              display: true,
              beginAtZero: true,
              grid: {
                drawTicks: false,
              },
              border: {
                display: false,
                dash: [8, 8],
              },
              ticks: {
                color: palette.text.disabled,
                count: 6,
                // callback: (value, index) => {
                //   if (index === 0) return;
                //   return formatNumber(value);
                // },
                // padding: 10,
              },
              afterDataLimits: (axis) => {
                const padding = 0.15;
                axis.min -= axis.min * padding;
                axis.max += axis.max * padding;
              },
              afterFit: (axis) => {
                axis.width = 40;
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
