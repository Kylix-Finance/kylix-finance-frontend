"use client";

import { Box, Button, IconButton, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { vaultData } from "~/mock/chart";
import { MoreHoriz, CalendarMonth } from "@mui/icons-material";
import { useTotalSupply } from "~/hooks/api/useTotalSupply";

const VaultChart = () => {
  const { data, isFetched } = useTotalSupply("1d");

  return (
    <Box>
      <Box className="flex justify-between">
        <Box className="flex gap-12">
          <Box>
            <Typography variant="body1" className="dark:text-primary-300/40">
              Supplied TVL
            </Typography>
            <Typography variant="h5" className="dark:text-white">
              $ 800M
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" className="dark:text-primary-300/40">
              Borrowed TVL
            </Typography>
            <Typography variant="h5" className="dark:text-white">
              $ 600M
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" className="dark:text-primary-300/40">
              Available Borrow
            </Typography>
            <Typography variant="h5" className="dark:text-white">
              $ 120M
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-col items-end gap-3 justify-center">
          <Box className="flex gap-6">
            <Box className="flex gap-2 items-center">
              <Box className="w-6 border-2 border-primary-500 rounded-md"></Box>
              <Typography variant="body2" className="dark:text-white">
                Total Borrowings
              </Typography>
            </Box>
            <Box className="flex gap-2 items-center">
              <Box className="w-6 border-2  border-secondary-500 rounded-md"></Box>
              <Typography variant="body2" className="dark:text-white">
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
      />
    </Box>
  );
};

export default VaultChart;
