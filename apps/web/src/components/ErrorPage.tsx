"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { KylixLogoSimple } from "~/assets/imgs";
import usePreferences from "~/hooks/usePreferences";

interface Props {
  code: 404 | 500;
  description: string;
  title: string;
}

export const ErrorPage: React.FC<Props> = ({ code, description, title }) => {
  usePreferences();

  return (
    <Box className="flex flex-col justify-center items-center w-full h-screen">
      <Image
        width={878}
        height={878}
        src={KylixLogoSimple.src}
        alt="kylix-logo-simple"
        className="absolute"
      />

      <Box className="flex flex-col gap-4 h-[878px] z-10">
        <Box className="h-[220px]" />

        <Box className="h-[220px]">
          <Typography className="text-[170px] font-bold text-center leading-[238px] text-[#1A433B] dark:text-white">
            {code}
          </Typography>
        </Box>

        <Box className="flex flex-col gap-8 items-center h-[220px] w-[441px]">
          <Box className="flex flex-col gap-2">
            <Typography className="text-6xl text-[36px] font-bold leading-[50px] text-center text-[#1A433B] dark:text-white">
              {title}
            </Typography>

            <Typography className="font-[Inter] text-[16px] font-medium leading-[22px] text-center text-ellipsis text-[#1A433B80] dark:text-[#FFFFFF80]">
              {description}
            </Typography>
          </Box>

          <Link href="/dashboard">
            <Button className="dark:text-[#0D0D0D]" variant="contained">
              Return To Dashboard
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
