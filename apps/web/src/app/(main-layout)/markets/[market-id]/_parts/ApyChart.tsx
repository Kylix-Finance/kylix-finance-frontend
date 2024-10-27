"use client";

import { Box, Button, Card, Checkbox, Typography } from "@mui/material";
import MultiLineChart from "~/components/Charts/MultiLineChart";
import { palette } from "~/config/palette";
import { vaultData } from "~/mock/chart";
import { ChangeEvent, useRef, useState } from "react";
import { Info } from "@mui/icons-material";
import TransactionForm from "./TransactionForm";
import { subWeeks } from "date-fns";
import { usePoolsData } from "~/hooks/api/usePoolsData";
import { useParams } from "next/navigation";

const ApyChart = () => {
  // const [checked, setChecked] = useState(false);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  const { "market-id": marketId } = useParams<{ "market-id": string }>();

  const { data } = usePoolsData(marketId);

  return (
    <Card variant="outlined">
      <Box className="flex justify-between items-center mb-3">
        <Box className="flex gap-6 mt-3">
          <Box className="flex gap-2 items-center">
            <Box className="w-6 border-2 border-primary-500 rounded-md"></Box>
            <Typography variant="body2">Borrow APY</Typography>
          </Box>
          <Box className="flex gap-2 items-center">
            <Box className="w-6 border-2  border-secondary-500 rounded-md"></Box>
            <Typography variant="body2">Supply APY</Typography>
          </Box>
        </Box>
        {/* <Box className="flex gap-3">
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
        </Box> */}
      </Box>

      <MultiLineChart
        datasets={[
          {
            data: data,
            borderColor: palette.primary.main,
            backgroundColor: palette.primary.main,
            tension: 0.5,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "borrow",
            },
          },
          {
            data: data,
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
    </Card>
  );
};

export default ApyChart;
