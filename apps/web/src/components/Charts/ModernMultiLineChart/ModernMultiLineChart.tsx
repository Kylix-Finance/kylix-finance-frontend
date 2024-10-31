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

type ModernMultiLineChartProps = {
  datasets: LineProps["data"]["datasets"];
  xLabel?: string;
  yLabel?: string;
  xGrid?: boolean;
  yGrid?: boolean;
};

export const ModernMultiLineChart = ({
  datasets,
  xLabel,
  yLabel,
  xGrid = false,
  yGrid = true,
}: ModernMultiLineChartProps) => {
  return (
    <Box height={280} width="100%">
      {/* <Box>
        {datasets.map((dataset) => (
          <Box key={dataset.label}>

          </Box>
        ))}
      </Box> */}
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
                maxTicksLimit: 2,
                callback: (value) => `${value}%`,
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
                display: false,
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
        // plugins={[
        //   {
        //     id: "hoverPlugin",
        //     beforeDatasetDraw(chart, args, options) {
        //       const { ctx, chartArea, scales } = chart;
        //       const dataset = chart.data.datasets[0];
        //       const meta = chart.getDatasetMeta(0);
        //       const points = meta.data;

        //       // Check if there is an active point (hovered)
        //       const activePoint = chart.tooltip?.dataPoints?.[0]?.element;

        //       if (activePoint && points.length > 1) {
        //         const hoverIndex = activePoint.index;

        //         // Create gradient for the line
        //         const gradient = ctx.createLinearGradient(
        //           chartArea.left,
        //           0,
        //           chartArea.right,
        //           0
        //         );

        //         // Calculate the color stop position safely
        //         const colorStopPosition = hoverIndex / (points.length - 1);

        //         // Ensure colorStopPosition is within the range of 0 to 1
        //         if (
        //           isFinite(colorStopPosition) &&
        //           colorStopPosition >= 0 &&
        //           colorStopPosition <= 1
        //         ) {
        //           console.log("we are in the if condition brother");
        //           // Set color stops: left of the hover index is colored, right is gray
        //           gradient.addColorStop(0, "rgba(0, 255, 0, 1)"); // Colored
        //           gradient.addColorStop(
        //             colorStopPosition,
        //             "rgba(0, 255, 0, 1)"
        //           );
        //           gradient.addColorStop(
        //             colorStopPosition,
        //             "rgba(128, 128, 128, 1)"
        //           ); // Gray
        //           gradient.addColorStop(1, "rgba(128, 128, 128, 1)");

        //           // Apply gradient to the border color
        //           dataset.borderColor = gradient;
        //           chart.update();
        //         }
        //       } else {
        //         // Reset to the original color if not hovering or if insufficient points
        //         dataset.borderColor = "rgba(0, 255, 0, 1)";
        //         chart.update();
        //       }
        //     },
        //   },
        // ]}
      />
    </Box>
  );
};
