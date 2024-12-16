import { Box, Typography } from "@mui/material";
import { formatNumber } from "~/utils";

export const Heading = () => {
  return (
    <Box className="flex flex-row gap-[50px]">
      <Box className="flex flex-row gap-2 justify-between items-center">
        <Typography
          variant="body1"
          lineHeight="24px"
          className="text-[#767F7D] dark:text-primary-100"
        >
          Borrow Balance:
        </Typography>

        <Typography className="!text-[16px] !font-[600] !leading-[22px] font-number dark:text-primary-100">
          $ {formatNumber(1800140)}
        </Typography>
      </Box>

      <Box className="flex flex-row gap-2 justify-between items-center">
        <Typography
          variant="body1"
          lineHeight="24px"
          className="text-[#767F7D] dark:text-primary-100"
        >
          Collateral Balance:
        </Typography>

        <Typography className="!text-[16px] !font-[600] !leading-[22px] font-number dark:text-primary-100">
          $ {formatNumber(1500240)}
        </Typography>
      </Box>

      <Box className="flex flex-row gap-2 justify-between items-center">
        <Typography
          lineHeight="24px"
          className="text-[#767F7D] dark:text-primary-100"
        >
          Loan Status
        </Typography>

        <Typography className="!text-[16px] text-[#767F7D] !font-[600] !leading-[22px] dark:text-primary-100">
          Low risk
        </Typography>
      </Box>
    </Box>
  );
};
