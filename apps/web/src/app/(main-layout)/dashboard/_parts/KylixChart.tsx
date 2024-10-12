"use client";

import { Box, Chip } from "@mui/material";
import { useState } from "react";
import LineChart from "~/components/Charts/LineChart";
import PeriodSelector from "~/components/PeriodSelector";

const KylixChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1h");
  const periods = [
    { value: "5m", label: "5m" },
    { value: "15m", label: "15m" },
    { value: "1h", label: "1h" },
    { value: "4h", label: "4h" },
    { value: "1d", label: "1d" },
    { value: "1w", label: "1w" },
  ];
  return (
    <Box>
      <Box className="flex justify-between items-start mb-3">
        <Box>
          <Box className="flex mb-2 items-center">
            <p className="mr-3">Kylix Price</p>
            <Chip label="2.25%" color="primary" />
          </Box>
          <p>4.12 USD</p>
        </Box>
        <PeriodSelector
          periods={periods}
          selected={selectedPeriod}
          setSelected={setSelectedPeriod}
        />
      </Box>
      <LineChart />
    </Box>
  );
};

export default KylixChart;
