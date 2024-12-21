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
        <Typography className="text-[#1A433B80] dark:text-[#bce5dd80] text-[10px] font-[500] leading-[15px]">
          {label}
        </Typography>
      </Box>

      <Typography
        variant="body3"
        fontWeight={500}
        className="text-[#1A433B] dark:text-[#E3E1E5] text-[14px] font-[Poppins] leading-[19px]"
      >
        $ {value}
      </Typography>
    </Box>
  );
};

export default FinanceSummary;
