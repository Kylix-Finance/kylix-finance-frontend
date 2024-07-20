"use client";

import { Box, Button, Card, Checkbox, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { vaultData } from "~/mock/chart";
import { ChangeEvent, useState } from "react";
import { Info } from "@mui/icons-material";

const ApyChart = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
            onClick={() => setChecked((prev) => !prev)}
            variant="outlined"
            size="small"
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              onClick={(event) => event.stopPropagation()}
              size="small"
            />
            Include Mining APY
            <Info className="ml-2 mr-1" />
          </Button>
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

export default ApyChart;
