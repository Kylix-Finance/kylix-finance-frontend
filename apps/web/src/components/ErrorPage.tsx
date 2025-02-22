"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { KylixLogoSimple } from "~/assets/imgs";
import usePreferences from "~/hooks/usePreferences";

interface Props {
  code: 404 | 500 | -1;
  description: string;
  title: string;
}

export const ErrorPage: React.FC<Props> = ({ code, description, title }) => {
  usePreferences();

  return (
    <Box className="flex flex-col justify-center items-center w-full h-full ">
      {code !== -1 && (
        <Image
          width={878}
          height={878}
          src={KylixLogoSimple.src}
          alt="kylix-logo-simple"
          className="absolute w-3/4 h-3/4 object-contain"
        />
      )}

      <Box className="flex flex-col justify-center items-center h-full w-full z-10">
        {code && code !== -1 && (
          <Typography
            variant="h1"
            fontWeight="bold"
            fontSize="100px"
            className="text-primary-500 dark:text-white"
          >
            {code}
          </Typography>
        )}
        <Box className="flex flex-col gap-8 items-center w-full">
          <Box className="flex flex-col gap-2 items-center">
            <Typography
              variant="h1"
              fontSize="50px"
              fontWeight="bold"
              className="text-primary-500 dark:text-white"
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-center text-ellipsis text-primary-500 dark:text-white/50 w-2/3"
            >
              {description}
            </Typography>
          </Box>

          {code !== -1 && (
            <Link href="/dashboard">
              <Button className="dark:text-[#0D0D0D]" variant="contained">
                Return To Dashboard
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};
