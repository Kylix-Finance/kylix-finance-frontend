"use client";
import { Bar } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { PoolValue } from "~/mock/chart";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import { Box } from "@mui/material";
import "chart.js/auto";
import { useEffect, useRef } from "react";

export const BarChart = () => {
  return (
    <Box height={250} width="100%">
      <Bar
        data={{
          datasets: [
            {
              maxBarThickness: 30,
              barPercentage: 0.8,
              data: PoolValue,
              parsing: {
                xAxisKey: "percentage",
                yAxisKey: "value",
              },
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
                gradientBg.addColorStop(1, "#45A996");
                gradientBg.addColorStop(0, "#A67B97");
                return gradientBg;
              },
              borderRadius: {
                topLeft: 7,
                topRight: 7,
                bottomLeft: 0,
                bottomRight: 0,
              },
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
              display: true,
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
