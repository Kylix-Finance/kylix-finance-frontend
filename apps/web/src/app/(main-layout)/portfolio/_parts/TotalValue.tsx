import { Box, Typography } from "@mui/material";
import Doughnut from "~/components/Charts/DoughnutChart";
import { FinanceSummary } from "~/components";
import { numToLocalString } from "~/utils";

const TotalValue = () => {
  const data = [
    { label: "Deposit", color: "#45A996", value: 25 },
    { label: "Borrowing", color: "#A67B97", value: 15 },
    { label: "Governance", color: "#C9E0DE", value: 25 },
    { label: "Stake", color: "#C8D2AE", value: 10 },
    { label: "Pool", color: "#AEAED2", value: 20 },
  ];

  return (
    <Box className="flex flex-col h-full">
      <Typography variant="h4" marginBottom="36px">
        {numToLocalString(65800200)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
      <Box className="flex mb-auto gap-6">
        <Doughnut
          backgroundColor={data.map((item) => item.color)}
          data={data.map((item) => item.value)}
          labels={data.map((item) => item.label)}
        />

        <Box className="grid grid-cols-2 gap-4">
          {data.map((item) => {
            return (
              <div key={item.label}>
                <FinanceSummary
                  key={item.label}
                  label={item.label}
                  value={Math.floor(item.value * Math.random() * 1000)}
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
