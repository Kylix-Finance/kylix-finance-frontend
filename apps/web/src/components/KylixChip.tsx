import { Box, Chip } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface Props {
  value: string;
}

const KylixChip = ({ value }: Props) => {
  return (
    <Box className="rounded-[4px] flex px-1.5 py-0.5 bg-primary-400/10 gap-1 items-center justify-center w-fit">
      <p className="font-bold text-[10px] leading-5 tracking-[-2%] font-number">
        {value}
      </p>
      <Image src="kylix-chip.svg" alt="Kylix badge" width={10} height={10} />
    </Box>
  );
};

export default KylixChip;
