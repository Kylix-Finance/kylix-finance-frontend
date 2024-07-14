"use client";
import { Line } from "react-chartjs-2";
import { palette } from "~/config/palette";
import { kylixPriceData } from "~/mock/chart";
import { formatNumber } from "~/utils";
import "chartjs-adapter-date-fns"; // This imports the adapter

const LineChart = () => {
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line
        data={{
          datasets: [
            {
              data: kylixPriceData,
              parsing: {
                xAxisKey: "timestamp",
                yAxisKey: "price",
              },
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
                  if (index === 0) return;
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
