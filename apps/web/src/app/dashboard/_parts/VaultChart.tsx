"use client";

import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";

const VaultChart = () => {
  return (
    <Box>
      <h1>VaultChart</h1>
      <Line
        data={{
          labels: ["1/3", "5/3", "10/3", "15/3", "20/3", "25/3", "30/3"],
          datasets: [
            {
              label: "Dataset 1",
              data: [20000, 30000, 28000, 35000, 32000, 31000, 30000],
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              tension: 0.1,
            },
            {
              label: "Dataset 2",
              data: [25000, 28000, 27000, 32000, 34000, 33000, 31000],
              borderColor: "rgba(153, 102, 255, 1)",
              backgroundColor: "rgba(153, 102, 255, 0.5)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(context.parsed.y);
                  }
                  return label;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return "$" + value;
                },
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default VaultChart;
