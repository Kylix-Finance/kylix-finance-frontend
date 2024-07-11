import { Box } from "@mui/material";
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
        <p>{label}</p>
      </Box>
      <p>$ {numToLocalString(value)}</p>
    </Box>
  );
};

export default FinanceSummary;
