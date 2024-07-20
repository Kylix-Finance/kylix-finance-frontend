import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { vaultData } from "~/mock/chart";
import { MoreHoriz, CalendarMonth } from "@mui/icons-material";

const VaultChart = () => {
  return (
    <Card variant="outlined">
      <Box className="flex justify-between items-center mb-3">
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
        <Box className="flex gap-3">
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
    </Card>
  );
};

export default VaultChart;
