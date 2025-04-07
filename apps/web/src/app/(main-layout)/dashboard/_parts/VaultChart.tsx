"use client";

import { Box, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { useTotalSupply } from "~/hooks/api/useTotalSupply";

const VaultChart = () => {
  const { data, isFetched } = useTotalSupply("1d");

  return (
    <Box>
      <Box className="flex justify-between">
        <Box className="flex gap-12">
          <Box>
            <Typography className="dark:text-primary-300/40" variant="body1">
              Supplied TVL
            </Typography>
            <Typography className="dark:text-white" variant="h5">
              $ 800M
            </Typography>
          </Box>
          <Box>
            <Typography className="dark:text-primary-300/40" variant="body1">
              Borrowed TVL
            </Typography>
            <Typography className="dark:text-white" variant="h5">
              $ 600M
            </Typography>
          </Box>
          <Box>
            <Typography className="dark:text-primary-300/40" variant="body1">
              Available Borrow
            </Typography>
            <Typography className="dark:text-white" variant="h5">
              $ 120M
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-col items-end gap-3 justify-center">
          <Box className="flex gap-6">
            <Box className="flex gap-2 items-center">
              <Box className="w-6 border-2 border-primary-500 rounded-md"></Box>
              <Typography className="dark:text-white" variant="body2">
                Total Borrowings
              </Typography>
            </Box>
            <Box className="flex gap-2 items-center">
              <Box className="w-6 border-2  border-secondary-500 rounded-md"></Box>
              <Typography className="dark:text-white" variant="body2">
                Total Supply
              </Typography>
            </Box>
          </Box>
          {/* <Box className="flex gap-3 mb-3">
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
              yAxisKey: "borrow",
            },
          },
          {
            data,
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.main,
            tension: 0.5,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "supply",
            },
          },
        ]}
        isLoading={!isFetched}
        scale="1d"
      />
    </Box>
  );
};

export default VaultChart;
