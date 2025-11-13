"use client";

import CustomAreaChart from "~/components/recharts/AreaChart";
import StackedBarChart from "~/components/recharts/StackedBarChart";

export default function Charts() {
  return (
    <div
      style={{
        // width: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        // margin: "auto",
        backgroundColor: "#000",
      }}
    >
      <StackedBarChart />
      <CustomAreaChart />
    </div>
  );
}
