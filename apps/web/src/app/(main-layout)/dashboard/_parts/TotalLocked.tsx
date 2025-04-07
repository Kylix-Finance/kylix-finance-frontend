import { Box, Typography } from "@mui/material";
import Doughnut from "~/components/Charts/DoughnutChart";
import { LineBreak, FinanceSummary } from "~/components";
import { palette } from "~/config/palette";
import { numToLocalString } from "~/utils";

const TotalLocked = () => {
  return (
    <Box className="flex flex-col h-full">
      <Typography
        className="dark:text-[#E3E1E5]"
        marginBottom="36px"
        variant="h4"
      >
        {numToLocalString(65800200)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
      <Box className="flex mb-auto">
        <Doughnut />
        <Box className="flex flex-col gap-5 ml-4">
          <FinanceSummary
            color={palette.primary.main}
            label="Total Deposit"
            value={1502300}
          />
          <FinanceSummary
            color={palette.secondary.main}
            label="Total Borrow"
            value={1502300}
          />
        </Box>
      </Box>
      <LineBreak />
      <Typography
        className="dark:text-[#5C6965]"
        marginBottom="8px"
        variant="body1"
      >
        Kylix Treasury Amount
      </Typography>
      <Typography className="dark:text-[#E3E1E5]" variant="h4">
        {numToLocalString(20800000)}{" "}
        <Typography variant="body3">USD</Typography>
      </Typography>
    </Box>
  );
};

export default TotalLocked;
