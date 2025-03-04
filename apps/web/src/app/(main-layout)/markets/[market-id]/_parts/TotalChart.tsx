"use client";

import { Box, Card, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { usePoolsData } from "~/hooks/api/usePoolsData";

const TotalChart = () => {
  const { data, isFetched } = usePoolsData("101");

  return (
    <Card variant="outlined" className="dark:bg-black-500 z-[999]">
      <Box className="flex justify-between items-center mb-3">
        <Box className="flex gap-6 mt-3">
          <Box className="flex gap-2 items-center">
            <Box className="w-6 border-2 border-primary-500 rounded-md"></Box>
            <Typography variant="body2">Total Borrowings</Typography>
          </Box>
          <Box className="flex gap-2 items-center">
            <Box className="w-6 border-2  border-secondary-500 rounded-md"></Box>
            <Typography variant="body2">Total Supply</Typography>
          </Box>
        </Box>
      </Box>

      <MultiLineChart
        isLoading={!isFetched}
        scale="1d"
        datasets={[
          {
            data,
            borderColor: palette.primary.main,
            backgroundColor: palette.primary.main,
            tension: 0.5,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "totalBorrow",
            },
          },
          {
            data,
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.main,
            tension: 0.5,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "totalSupply",
            },
          },
        ]}
      />
    </Card>
  );
};

export default TotalChart;
