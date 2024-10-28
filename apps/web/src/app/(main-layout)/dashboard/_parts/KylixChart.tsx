"use client";

import { Box, Chip } from "@mui/material";
import { useState } from "react";
import LineChart from "~/components/Charts/LineChart";
import PeriodSelector from "~/components/PeriodSelector";
import { CHART_SCALES } from "~/constants";
import { useKylixPrice } from "~/hooks/api/useKylixPrice";
import { ChartScale } from "~/types";

const periods = CHART_SCALES.map((scale) => ({
  value: scale,
  label: scale,
}));

const KylixChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<ChartScale>("1d");

  const { data } = useKylixPrice(selectedPeriod);

  const price = data?.[0]?.price;

  return (
    <Box>
      <Box className="flex justify-between items-start mb-3">
        <Box>
          <Box className="flex mb-2 items-center">
            <p className="mr-3">Kylix Price</p>
            <Chip label="2.25%" color="primary" />
          </Box>
          <p>{price} USD</p>
        </Box>
        <PeriodSelector
          periods={periods}
          selected={selectedPeriod}
          setSelected={setSelectedPeriod}
        />
      </Box>
      <LineChart
        scale={selectedPeriod}
        data={data}
        parsing={{
          xAxisKey: "time",
          yAxisKey: "price",
        }}
      />
    </Box>
  );
};

export default KylixChart;
