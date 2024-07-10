"use client";
import { useTheme } from "@mui/material";
import { Line } from "react-chartjs-2";
import { kylixPriceData } from "~/mock/chart";
import { formatNumber } from "~/utils";

const LineChart = () => {
  const { palette } = useTheme();

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line
        data={{
          labels: ["Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"], // X-axis labels
          datasets: [
            {
              label: "Kylis Price",
              data: [1200, 1500, 1600, 3000, 1900, 1800, 2000],
              fill: "origin",
              borderColor: palette.primary.light,
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
              // tension: 0.1, // Smoothing of the line
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
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
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
                count: 4,
                callback: (value, index) => {
                  if (index === 0) return;
                  return formatNumber(value);
                },
              },
              afterDataLimits: (axis) => {
                const padding = 0.2;
                axis.min -= axis.min * padding;
                axis.max += axis.max * padding;
              },
            },
          },
          elements: {
            point: {
              radius: 1, // Adjust the size of the points on the line
            },
          },

          maintainAspectRatio: false, // Set to false to set height and width manually
        }}
      />
    </div>
  );
};

export default LineChart;
