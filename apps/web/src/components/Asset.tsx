import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const Asset = ({
  helperText: helperText,
  label,
}: {
  helperText: string;
  label: string;
}) => {
  const iconSize = 24;

  return (
    <Box className="flex flex-row items-center justify-start gap-[8px]">
      <Box
        style={{
          width: iconSize,
          height: iconSize,
        }}
      >
        <Image
          draggable="false"
          src="/kylix-chip.svg"
          alt="Asset Icon"
          width={iconSize}
          height={iconSize}
        />
      </Box>
      <Box className="flex flex-col">
        <Typography variant="md" fontWeight={"bold"}>
          {label}
        </Typography>
        {helperText && <Typography variant="xs">{helperText}</Typography>}
      </Box>
    </Box>
  );
};
