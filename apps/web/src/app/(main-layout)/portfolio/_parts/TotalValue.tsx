"use client";
import { Box, Typography } from "@mui/material";
import Doughnut from "~/components/Charts/DoughnutChart";
import { FinanceSummary } from "~/components";
import { numToLocalString } from "~/utils";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { useGetAssetWiseSupplies } from "~/hooks/chain/useGetAssetWiseSupplies";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";

const chartData = [
  { label: "Deposit", color: "#45A996", value: 25 },
  { label: "Borrowing", color: "#A67B97", value: 15 },
  { label: "Governance", color: "#C9E0DE", value: 25 },
  { label: "Stake", color: "#C8D2AE", value: 10 },
  { label: "Pool", color: "#AEAED2", value: 20 },
];

const TotalValue = () => {
  const { data: assetWiseBorrowCollateral } =
    useGetAssetWiseBorrowsCollaterals();
  const { data: assetWiseSupplies } = useGetAssetWiseSupplies();
  const summaryData = [
    {
      label: "Deposit",
      color: "#45A996",
      value: formatBigNumbers(
        formatUnit(assetWiseSupplies?.totalSupplied || 0, 18),
        2
      ),
    },
    {
      label: "Borrowing",
      color: "#A67B97",
      value: formatBigNumbers(
        formatUnit(assetWiseBorrowCollateral?.totalBorrowed || 0, 18),
        2
      ),
    },
  ];
  const finalSummaryData = [...summaryData, ...chartData.slice(2)];

  return (
    <Box className="flex flex-col h-full">
      <Typography variant="h4" marginBottom="36px">
        {numToLocalString(65800200)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
      <Box className="flex mb-auto gap-6">
        <Doughnut
          backgroundColor={chartData.map((item) => item.color)}
          data={chartData.map((item) => item.value)}
          labels={chartData.map((item) => item.label)}
        />

        <Box className="grid grid-cols-2 gap-4">
          {finalSummaryData.map((item, index) => {
            return (
              <div key={item.label}>
                <FinanceSummary
                  key={item.label}
                  label={item.label}
                  value={
                    index >= 2
                      ? Math.floor(index * Math.random() * 1000)
                      : item.value
                  }
                  color={item.color}
                />
              </div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TotalValue;
