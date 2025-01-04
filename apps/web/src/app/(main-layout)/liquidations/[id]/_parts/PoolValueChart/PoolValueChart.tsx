import { Box, Typography } from "@mui/material";
import { Card, TokenIcon } from "~/components";
import BarChart from "~/components/Charts/BarChart";
import { liquidatedValue, liquidatedEmptied } from "~/mock/chart";

export const PoolValueChart = () => {
  return (
    <Box className="flex-1 p-6 border rounded-md w-full z-[999] dark:bg-black-500 dark:border-transparent">
      <Box className="flex items-center mb-10">
        <Box className="-mr-4">
          <TokenIcon symbol="sad" />
        </Box>
        <Box className="mr-2">
          <TokenIcon symbol="asd" />
        </Box>
        <Typography variant="body2" className="dark:text-primary-100">
          Bid for liquidated KYL using Usdt
        </Typography>
      </Box>
      <BarChart
        height={250}
        gradient={{ start: "#45A996", end: "#A67B97" }}
        data={liquidatedValue}
        parsing={{
          xAxisKey: "percentage",
          yAxisKey: "value",
        }}
        maxBarThickness={30}
        yLabel="Pool Value"
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
        yLabel="Time Emptied"
      />
    </Box>
  );
};
