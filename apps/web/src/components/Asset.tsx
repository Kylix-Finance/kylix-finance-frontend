import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Icon } from "~/components";

export const Asset = ({
  helperText: helperText,
  label,
}: {
  helperText: string;
  label: string;
}) => {
  return (
    <Box className="flex flex-row items-center justify-start gap-[8px]">
      <Icon symbol="ARB" />
      <Box className="flex flex-col">
        <Typography variant="md" fontWeight={"bold"}>
          {label}
        </Typography>
        {helperText && <Typography variant="xs">{helperText}</Typography>}
      </Box>
    </Box>
  );
};
