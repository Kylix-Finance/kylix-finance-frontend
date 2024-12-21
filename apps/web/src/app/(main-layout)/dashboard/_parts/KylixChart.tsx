"use client";

import { Box, Chip, Typography } from "@mui/material";
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
            <p className="mr-3 text-[#1A433B] dark:text-[#E3E1E5] font-[500] leading-6 text-[14px]">
              Kylix Price
            </p>
            <span
              className="text-white bg-[#45A996] p-[2px_6px] rounded-[30px] dark:bg-[#56DDB4] text-[12px] font-[700] leading-4 dark:text-[#0D0D0D]"
              color="primary"
            >
              2.25%
            </span>
          </Box>

          <div className="flex flex-row gap-[6px] w-max items-center justify-between">
            <Typography
              className="text-[#1A433B] dark:text-[#E3E1E5] font-[Poppins] text-[18px] font-[700] leading-7"
              component="span"
            >
              {price}
            </Typography>
            <Typography
              className="text-[#1A433B] dark:text-[#E3E1E5] font-[Poppins] text-[12px] leading-[16px] "
              component="span"
            >
              USD
            </Typography>
          </div>
        </Box>
        <PeriodSelector
          periods={periods}
          selected={selectedPeriod}
          setSelected={setSelectedPeriod}
        />
      </Box>
      <LineChart
        round
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
