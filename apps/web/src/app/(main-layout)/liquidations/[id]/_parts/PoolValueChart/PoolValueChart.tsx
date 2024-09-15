import BarChart from "~/components/Charts/BarChart";
import { liquidatedValue, liquidatedEmptied } from "~/mock/chart";

export const PoolValueChart = () => {
  return (
    <div>
      <BarChart
        height={250}
        gradient={{ start: "#45A996", end: "#A67B97" }}
        data={liquidatedValue}
        parsing={{
          xAxisKey: "percentage",
          yAxisKey: "value",
        }}
        maxBarThickness={30}
      />

      <BarChart
        height={90}
        gradient={{ start: "#C0D2CFCC", end: "#CCBDC7CC" }}
        data={liquidatedEmptied}
        parsing={{
          xAxisKey: "percentage",
          yAxisKey: "value",
        }}
        maxBarThickness={8}
        reverse={true}
        x={false}
      />
    </div>
  );
};
