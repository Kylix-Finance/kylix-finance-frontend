"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { palette } from "~/config/palette";
import "chart.js/auto";

const DoughnutChart = () => {
  return (
    <div className="w-25 h-25">
      <Doughnut
        width="100%"
        height="100%"
        data={{
          datasets: [
            {
              data: [12, 19],
              backgroundColor: [palette.primary.main, palette.secondary.main],
              borderRadius: 1000,
              spacing: 2,
            },
          ],
          labels: ["Total Deposit", "Total Borrow"],
        }}
        options={{
          cutout: "78%",
          maintainAspectRatio: false,
          responsive: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
