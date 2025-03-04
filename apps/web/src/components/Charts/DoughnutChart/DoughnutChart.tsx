"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { palette } from "~/config/palette";
import "chart.js/auto";
import { LoadingSpinner } from "~/components/Loaders";

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
    <div className="flex justify-center items-center w-25 h-25">
      {data ? (
        <Doughnut
          width="100%"
          height="100%"
          data={{
            datasets: [
              {
                backgroundColor,
                borderColor: "transparent",
                borderRadius: 1000,
                data,
                spacing: 2,
              },
            ],
            labels,
          }}
          options={{
            animation: {
              duration: 300,
            },
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
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default DoughnutChart;
