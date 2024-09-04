import { Box, Button, IconButton, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { vaultData } from "~/mock/chart";
import { MoreHoriz, CalendarMonth } from "@mui/icons-material";

const VaultChart = () => {
  return (
    <Box>
      <Box className="flex justify-between">
        <Box className="flex gap-12">
          <Box>
            <Typography variant="body1">Supplied TVL</Typography>
            <Typography variant="h5">$ 800M</Typography>
          </Box>
          <Box>
            <Typography variant="body1">Borrowed TVL</Typography>
            <Typography variant="h5">$ 600M</Typography>
          </Box>
          <Box>
            <Typography variant="body1">Available Borrow</Typography>
            <Typography variant="h5">$ 120M</Typography>
          </Box>
        </Box>
        <Box className="flex flex-col items-end gap-3">
          <Box className="flex gap-6">
            <Box className="flex gap-2 items-center">
              <Box className="w-6 border-2 border-primary-500 rounded-md"></Box>
              <Typography variant="body2">Total Borrowings</Typography>
            </Box>
            <Box className="flex gap-2 items-center">
              <Box className="w-6 border-2  border-secondary-500 rounded-md"></Box>
              <Typography variant="body2">Total Supply</Typography>
            </Box>
          </Box>
          <Box className="flex gap-3 mb-3">
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
          </Box>
        </Box>
      </Box>

      <MultiLineChart
        datasets={[
          {
            data: vaultData.supply,
            borderColor: palette.primary.main,
            tension: 0.5,
            parsing: {
              xAxisKey: "timestamp",
              yAxisKey: "price",
            },
          },
          {
            data: vaultData.borrow,
            borderColor: palette.secondary.main,
            tension: 0.5,
            parsing: {
              xAxisKey: "timestamp",
              yAxisKey: "price",
            },
          },
        ]}
      />
    </Box>
  );
};

export default VaultChart;
