"use client";
import "chart.js/auto";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  return (
    <div className="w-32 h-32">
      <Doughnut
        width="100%"
        height="100%"
        data={{
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 2,
              borderRadius: 1000,
              spacing: 4,
            },
          ],
        }}
        options={{
          cutout: "85%",
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DoughnutChart;
