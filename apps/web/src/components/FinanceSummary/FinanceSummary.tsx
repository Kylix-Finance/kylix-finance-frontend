import { Box, Typography } from "@mui/material";
import { numToLocalString } from "~/utils";

type FinanceSummaryProps = {
  label: string;
  value: number | string;
  color: string;
};

const FinanceSummary = ({ label, value, color }: FinanceSummaryProps) => {
  return (
    <Box className="flex flex-col gap-1">
      <Box className="flex items-center">
        <Box className="w-3 h-3 rounded-sm mr-1" bgcolor={color}></Box>

        <Typography className="text-primary-800/40 dark:text-primary-100 !text-[10px] !font-[500] !leading-[15px]">
          {label}
        </Typography>
      </Box>

      <Typography
        variant="body3"
        fontWeight={500}
        lineHeight={"17px"}
        className="text-primary-800 dark:text-primary-100/80 font-number"
      >
        $ {value}
      </Typography>
    </Box>
  );
};

export default FinanceSummary;
