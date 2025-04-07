import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Icons } from "~/assets/svgs";
import { LineBreak } from "~/components";

const FeaturedCard = () => {
  return (
    <Box className="bg-light dark:bg-black-900 py-4 px-6 flex-col gap-4 rounded-lg shadow-secondary-box w-full">
      <Box className="flex justify-between w-2/3">
        <Box className="flex flex-col gap-1">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50 dark:text-primary-300/40">
            Deposit
          </p>
          <Box className="flex gap-1.5 items-end">
            <Image
              alt="Deposit token icon"
              height={20}
              src="/kylix-chip.svg"
              width={20}
            />
            <Typography className="dark:text-white" variant="subtitle2">
              Dot
            </Typography>
          </Box>
        </Box>
        <Icons.ArrowRight className="text-primary-500" />
        <Box className="flex flex-col gap-1">
          <Typography
            className="text-primary-800/50 dark:text-primary-300/40"
            variant="caption"
          >
            Deposit
          </Typography>
          <Box className="flex gap-1.5 items-end">
            <Image
              alt="Deposit token icon"
              height={20}
              src="/kylix-chip.svg"
              width={20}
            />
            <Typography className="dark:text-white" variant="subtitle2">
              Dot
            </Typography>
          </Box>
        </Box>
      </Box>
      <LineBreak />
      <Box className="flex justify-between">
        <Box className="flex flex-col">
          <Typography
            className="text-primary-800/50 dark:text-primary-300/40"
            variant="caption"
          >
            Available Liquidity
          </Typography>
          <Typography
            className="text-primary-800/90 dark:text-white"
            variant="subtitle2"
          >
            $ 10,200,212
          </Typography>
        </Box>
        <Box className="flex flex-col">
          <Typography
            className="text-primary-800/50 dark:text-primary-300/40"
            variant="caption"
          >
            Interest Rate
          </Typography>
          <Typography
            className="text-primary-800/90 dark:text-white"
            variant="subtitle2"
          >
            8.10 %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedCard;
