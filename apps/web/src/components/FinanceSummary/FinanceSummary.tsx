import { Box, Typography } from "@mui/material";
import { numToLocalString } from "~/utils";

type FinanceSummaryProps = {
  label: string;
  value: number;
  color: string;
};

const FinanceSummary = ({ label, value, color }: FinanceSummaryProps) => {
  return (
    <Box className="flex flex-col gap-1">
      <Box className="flex items-center">
        <Box className="w-3 h-3 rounded-sm mr-1" bgcolor={color}></Box>
        <Typography variant="body1">{label}</Typography>
      </Box>
      <Typography variant="body2">$ {numToLocalString(value)}</Typography>
    </Box>
  );
};

export default FinanceSummary;
