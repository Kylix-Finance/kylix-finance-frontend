"use client";

import { Box, Button, Checkbox, Typography } from "@mui/material";
import { ComponentProps, useState, useCallback, ChangeEvent } from "react";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns";
import "chart.js/auto";
import { throttle } from "lodash";
import { crosshairPlugin } from "~/lib/chart";
import { Info } from "@mui/icons-material";
import { useLocalStorage } from "usehooks-ts";
import { LoadingSpinner } from "~/components/Loaders";

type LineProps = ComponentProps<typeof Line>;

type ModernMultiLineChartProps = {
  datasets: LineProps["data"]["datasets"];
  xLabel?: string;
  yLabel?: string;
  xGrid?: boolean;
  yGrid?: boolean;
  activeIndex: number;
  isLoading?: boolean;
};

export const ModernMultiLineChart = ({
  activeIndex = 0,
  datasets,
  xGrid = false,
  xLabel,
  yGrid = true,
  yLabel,
  isLoading,
}: ModernMultiLineChartProps) => {
  const [isLogScale, setIsLogScale] = useState(true);
  const [activePoint, setActivePoint] = useState<number[]>([]);
  const [value] = useLocalStorage("theme-mode", "light");
  const isDarkMode = value === "dark";
  const color = isDarkMode ? "#daeeea" : "#151515";
  const gridColor = isDarkMode ? "#daeeea10" : "#daeeea70";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLogScale(event.target.checked);
  };

  const [isChartHovered, setIsChartHovered] = useState(false);

  //@ts-expect-error: dataset type
  const defaultDataset = datasets.map((dataset) => dataset.data?.[activeIndex]);

  const defaultPoint = [
    defaultDataset[0]?.borrow_apy,
    defaultDataset[1]?.supply_apy,
  ];

  const point = isChartHovered ? activePoint : defaultPoint;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledSetState = useCallback(
    throttle((newValue) => {
      setActivePoint(newValue);
    }, 150),
    []
  );

  return (
    <Box>
      <Box className="flex justify-end mb-3">
        <Button
          size="small"
          variant="outlined"
          onClick={() => setIsLogScale((prev) => !prev)}
        >
          <Checkbox
            checked={isLogScale}
            size="small"
            onChange={handleChange}
            onClick={(event) => event.stopPropagation()}
          />
          Logarithmic scale
          <Info className="ml-2 mr-1" />
        </Button>
      </Box>

      {isLoading ? (
        <Box className="flex items-center justify-center" height={280}>
          <LoadingSpinner />
        </Box>
      ) : (
        <Box className="flex items-center">
          <Box className="w-[120px]">
            {datasets.map((dataset, index) => {
              const value = point[index];
              if (value === undefined) return null;
              const percentage = (100 * point[index]).toFixed(2);
              return (
                <Box key={dataset.label} className="mb-4">
                  <Typography
                    className="mb-2 dark:text-primary-100"
                    variant="body1"
                  >
                    {dataset.label}
                  </Typography>
                  <Typography className="dark:text-black-300" variant="body2">
                    {percentage}%
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            className="flex justify-center items-center"
            height={280}
            width="100%"
          >
            <Line
              data={{
                datasets,
              }}
              options={{
                responsive: true,
                animation: {
                  duration: 300,
                },
                hover: {
                  mode: "index",
                  intersect: false,
                },
                layout: {
                  padding: {
                    left: -60,
                  },
                },
                onHover: (_, elements) => {
                  const points = elements.map(
                    //@ts-expect-error: type is not correct
                    (element) => element?.element?.$context?.parsed?.y
                  );

                  if (points[0] && points[1]) {
                    throttledSetState(points);
                  }
                },
                onLeave: () => {
                  console.log("onLeave");
                  setIsChartHovered(false);
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
                    lineColor: color,
                    lineWidth: 2,
                    datasetIndex: 0,
                    dataIndex: activeIndex,
                    // text: "March Data Point",
                    textColor: color,
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
                    type: isLogScale ? "logarithmic" : "linear",
                    display: yGrid,
                    min: 0,
                    border: {
                      display: false,
                    },
                    grid: {
                      display: true,
                      color: gridColor,
                    },
                    ticks: {
                      display: false,
                      color: palette.text.disabled,
                      // count: 6,
                      maxTicksLimit: 5,
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
              width="100%"
              onMouseEnter={() => setIsChartHovered(true)}
              onMouseLeave={() => setIsChartHovered(false)}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
