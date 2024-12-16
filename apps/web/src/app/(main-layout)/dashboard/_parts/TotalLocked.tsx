import { Box, Typography } from "@mui/material";
import Doughnut from "~/components/Charts/DoughnutChart";
import { LineBreak, FinanceSummary } from "~/components";
import { palette } from "~/config/palette";
import { numToLocalString } from "~/utils";

const TotalLocked = () => {
  return (
    <Box className="flex flex-col h-full">
      <Typography
        variant="h4"
        marginBottom="36px"
        className="dark:text-[#E3E1E5]"
      >
        {numToLocalString(65800200)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
      <Box className="flex mb-auto">
        <Doughnut />
        <Box className="flex flex-col gap-5 ml-4">
          <FinanceSummary
            label="Total Deposit"
            value={1502300}
            color={palette.primary.main}
          />
          <FinanceSummary
            label="Total Borrow"
            value={1502300}
            color={palette.secondary.main}
          />
        </Box>
      </Box>
      <LineBreak />
      <Typography
        variant="body1"
        marginBottom="8px"
        className="dark:text-[#5C6965]"
      >
        Kylix Treasury Amount
      </Typography>
      <Typography variant="h4" className="dark:text-[#E3E1E5]">
        {numToLocalString(20800000)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
    </Box>
  );
};

export default TotalLocked;
