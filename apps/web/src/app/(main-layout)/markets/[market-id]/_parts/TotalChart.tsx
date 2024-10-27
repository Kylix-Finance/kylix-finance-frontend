"use client";

import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { vaultData } from "~/mock/chart";
import { MoreHoriz, CalendarMonth } from "@mui/icons-material";
import { usePoolsData } from "~/hooks/api/usePoolsData";
import { useParams } from "next/navigation";

const TotalChart = () => {
  const { "market-id": marketId } = useParams<{ "market-id": string }>();

  const { data } = usePoolsData(marketId);

  return (
    <Card variant="outlined">
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
        {/* <Box className="flex gap-3">
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<CalendarMonth />}
          >
            March 2024
          </Button>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Box> */}
      </Box>

      <MultiLineChart
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
