"use client";

import { Box, Typography } from "@mui/material";
import { ComponentProps, useState, useCallback } from "react";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import "chart.js/auto";
import { throttle } from "lodash";
import { crosshairPlugin } from "~/lib/chart";

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
  const [activePoint, setActivePoint] = useState<number[]>([]);

  const throttledSetState = useCallback(
    throttle((newValue) => {
      setActivePoint(newValue);
    }, 50),
    []
  );

  return (
    <Box className="flex items-center">
      <Box className="w-[120px] -mr-20">
        {datasets.map((dataset, index) => (
          <Box key={dataset.label} className="mb-4">
            <Typography variant="body1" className="mb-2">
              {dataset.label}
            </Typography>
            <Typography variant="body2">
              {activePoint[index]?.toFixed(2)}%
            </Typography>
          </Box>
        ))}
      </Box>

      <Box height={280} width="100%">
        <Line
          data={{
            datasets,
          }}
          options={{
            responsive: true,
            hover: {
              mode: "index",
              intersect: false,
            },
            onHover: (_, elements) => {
              const borrow = elements[0]?.element.y;
              const earn = elements[1]?.element.y;

              const points = elements.map(
                //@ts-expect-error: type is not correct
                (element) => element.element.$context.parsed.y * 100
              );

              if (borrow && earn) {
                // startTransition(() => {
                //   setActivePoint(points);
                // });

                throttledSetState(points);
              }
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
              //@ts-expect-error: type is not correct
              crosshair: {
                lineColor: "rgba(0,0,0,0.7)",
                lineWidth: 2,
                datasetIndex: 0,
                dataIndex: 50,
                // text: "March Data Point",
                textColor: "black",
                fontSize: 14,
                fontFamily: "Arial",
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
                type: "logarithmic",
                display: true,
                // beginAtZero: true,
                border: {
                  display: false,
                },
                grid: {
                  display: yGrid,
                },
                ticks: {
                  display: false,
                  color: palette.text.disabled,
                  // count: 6,
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
          plugins={[crosshairPlugin]}
        />
      </Box>
    </Box>
  );
};
