import { Box } from "@mui/material";
import Image from "next/image";
import { Icons } from "~/assets/svgs";
import { LineBreak } from "~/components";

interface Props {}

const FeaturedCard = () => {
  return (
    <Box className="bg-light py-4 px-6 flex-col gap-4 rounded-lg shadow-secondary-box">
      <Box className="flex justify-between w-2/3 ">
        <Box className="flex flex-col gap-1">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Deposit
          </p>
          <Box className="flex gap-1.5 items-end">
            <Image
              src="/kylix-chip.svg"
              width={20}
              height={20}
              alt="Deposit token icon"
            />
            <p className="font-bold text-sm leading-5">Dot</p>
          </Box>
        </Box>
        <Icons.ArrowRight className="text-primary-500" />
        <Box className="flex flex-col gap-1">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Deposit
          </p>
          <Box className="flex gap-1.5 items-end">
            <Image
              src="/kylix-chip.svg"
              width={20}
              height={20}
              alt="Deposit token icon"
            />
            <p className="font-bold text-sm leading-5">Dot</p>
          </Box>
        </Box>
      </Box>
      <LineBreak />
      <Box className="flex justify-between">
        <Box className="flex flex-col">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Available Liquidity
          </p>
          <p className="font-number font-medium text-base leading-6 text-primary-800/90">
            $ 10,200,212
          </p>
        </Box>
        <Box className="flex flex-col">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Interest Rate
          </p>
          <p className="font-number font-medium text-base leading-6 text-primary-800/90">
            8.10 %
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedCard;
