import { Box, Chip } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
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
      className={cn(
        "rounded-[4px] flex px-1.5 py-0.5 bg-primary-400/10 gap-1 items-center justify-center w-fit font-medium text-[10px] leading-5 tracking-[-2%] font-number text-primary-800",
        className
      )}
    >
      {/* TODO: Replace with MUI Components */}
      <span>{value}</span>
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
