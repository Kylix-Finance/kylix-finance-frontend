import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import { cn } from "~/utils";

interface Props {
  value: string;
  className?: string;
  iconDimension?: {
    width: number;
    height: number;
  };
}

const KylixChip = ({
  value,
  className,
  iconDimension = {
    height: 10,
    width: 10,
  },
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "4px",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
        fontWeight: "500",
        fontSize: "10px",
        lineHeight: "20px",
        letterSpacing: "-2%",
        borderRadius: "4px",
        paddingX: "6px",
        paddingY: "1px",
      }}
      className={cn(
        "bg-primary-400/10 font-number text-primary-800",
        className
      )}
    >
      <Typography variant="caption">{value}</Typography>
      <Image
        draggable="false"
        src="/kylix-chip.svg"
        alt="Kylix badge"
        width={iconDimension.width}
        height={iconDimension.height}
      />
    </Box>
  );
};

export default KylixChip;
