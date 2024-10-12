"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { palette } from "~/config/palette";
import "chart.js/auto";

// TODO: Remove optional for `data` and `backgroundColor`
interface Props {
  backgroundColor?: Array<string>;
  labels?: Array<string>;
  data?: Array<number>;
}

const DoughnutChart: React.FC<Props> = ({
  backgroundColor = [palette.primary.main, palette.secondary.main],
  data = [12, 19],
  labels = ["Total Deposit", "Total Borrow"],
}) => {
  return (
    <div className="w-25 h-25">
      <Doughnut
        width="100%"
        height="100%"
        data={{
          datasets: [
            {
              backgroundColor,
              borderRadius: 1000,
              data,
              spacing: 2,
            },
          ],
          labels,
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
