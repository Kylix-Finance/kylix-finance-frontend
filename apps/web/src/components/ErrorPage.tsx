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
          alt="kylix-logo-simple"
          className="absolute w-3/4 h-3/4 object-contain"
          height={878}
          src={KylixLogoSimple.src}
          width={878}
        />
      )}

      <Box className="flex flex-col justify-center items-center h-full w-full z-10">
        {code && code !== -1 && (
          <Typography
            className="text-primary-500 dark:text-white"
            fontSize="100px"
            fontWeight="bold"
            variant="h1"
          >
            {code}
          </Typography>
        )}
        <Box className="flex flex-col gap-8 items-center w-full">
          <Box className="flex flex-col gap-2 items-center">
            <Typography
              className="text-primary-500 dark:text-white"
              fontSize="50px"
              fontWeight="bold"
              variant="h1"
            >
              {title}
            </Typography>
            <Typography
              className="text-center text-ellipsis text-primary-500 dark:text-white/50 w-2/3"
              variant="subtitle1"
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
