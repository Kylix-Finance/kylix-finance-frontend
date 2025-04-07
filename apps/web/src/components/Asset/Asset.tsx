import { Box, Typography } from "@mui/material";
import { TokenIcon } from "..";

const Asset = ({
  helperText: helperText,
  label,
  symbol,
}: {
  helperText: string;
  label: string;
  symbol: string;
}) => {
  return (
    <Box className="flex flex-row align-middle items-center justify-start gap-[8px]">
      <TokenIcon symbol={symbol} />
      <Box className="flex flex-col">
        <Typography
          className="dark:text-black-100"
          fontWeight="bold"
          variant="body3"
        >
          {label}
        </Typography>
        {helperText && (
          <Typography
            className="text-[#1A433B80] dark:text-[#5C6965]"
            variant="caption"
          >
            {helperText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Asset;
