"use client";

import { Card } from "@mui/material";
import { palette } from "~/config/palette";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useInterestRate } from "~/hooks/api/useInterestRate";
import ModernMultiLineChart from "~/components/Charts/ModernMultiLineChart";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { InterestRateSchema } from "~/types";

const ApyChart = () => {
  const { "market-id": marketId } = useParams<{ "market-id": string }>();

  const [finalData, setFinalData] = useState<InterestRateSchema[]>();

  const { data } = useInterestRate();

  const { data: pool } = useGetLendingPools({
    asset: marketId,
  });

  const utilization = Number(
    pool?.assets[0]?.utilization?.replace("%", "") || -1
  );

  const RoundedUtilization = Math.round(utilization * 10);

  useEffect(() => {
    if (!data || utilization === -1) return;
    const trimmedData = data.map((item, index) => {
      if (index === RoundedUtilization) {
        return { ...item, utilization_rate: utilization };
      }
      return item;
    });
    setFinalData(trimmedData);
  }, [data, utilization, RoundedUtilization]);

  return (
    <Card variant="outlined" className="">
      <ModernMultiLineChart
        activeIndex={RoundedUtilization}
        datasets={[
          {
            label: "Borrow APR",
            data: finalData,
            borderColor: palette.primary.main,
            backgroundColor: palette.primary.main,
            tension: 0,
            parsing: {
              xAxisKey: "utilization_rate",
              yAxisKey: "borrow_apy",
            },
          },
          {
            label: "Earn APR",
            data: finalData,
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.main,
            tension: 0,
            parsing: {
              xAxisKey: "utilization_rate",
              yAxisKey: "supply_apy",
            },
          },
        ]}
      />
    </Card>
  );
};

export default ApyChart;
