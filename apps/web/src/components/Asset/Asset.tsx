import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { TokenIcon } from "..";

const Asset = ({
  helperText: helperText,
  label,
}: {
  helperText: string;
  label: string;
}) => {
  return (
    <Box className="flex flex-row align-middle items-center justify-start gap-[8px]">
      <TokenIcon symbol={label} />
      <Box className="flex flex-col">
        <Typography
          variant="body3"
          className="dark:text-black-100"
          fontWeight={"bold"}
        >
          {label}
        </Typography>
        {helperText && (
          <Typography variant="caption" className="dark:text-black-100">
            {helperText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Asset;
