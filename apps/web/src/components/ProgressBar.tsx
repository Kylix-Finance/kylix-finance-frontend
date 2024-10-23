"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Icons } from "~/assets/svgs";

const ProgressBar = () => {
  return (
    <Box className="flex flex-col gap-4">
      <Box className="h-[14px] gap-[22px] flex justify-end items-center">
        {[
          {
            badge: (
              <Box className="size-[14px]">
                <Image
                  src="/progress.png"
                  alt="progress"
                  width={14}
                  height={14}
                />
              </Box>
            ),
            label: "Current LTV",
          },
          {
            badge: <Box className="size-[14px] bg-[#EA8E3A] rounded-[2px]" />,
            label: "Sale LTV",
          },
          {
            badge: <Box className="size-[14px] bg-[#F07979] rounded-[2px]" />,
            label: "Liquidation LTV",
          },
        ].map((item) => {
          return (
            <Box key={item.label} className="flex gap-1 items-center">
              {item.badge}
              <Typography className="!text-[10px] text-[#767F7D] !font-[600] !leading-[15px]">
                {item.label}
              </Typography>
              <Icons.Info />
            </Box>
          );
        })}
      </Box>

      <Box className="relative w-full">
        <Box className="relative h-4 w-full bg-[#ECF6F4] rounded-[4px] overflow-hidden">
          <Box
            className="h-full"
            style={{
              width: "42.1%",
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(90, 195, 181,1), rgba(90, 195, 181,1) 2px, #45A996 2px, #45A996 6px)",
            }}
          />
          <Box className="absolute top-0 left-[63.6%] h-full w-[5px] bg-orange-400 rounded" />
          <Box className="absolute top-0 left-[72.01%] h-full w-[5px] bg-red-400 rounded" />
        </Box>

        <Box className="pb-6">
          <Box className="absolute left-[42.1%] -translate-x-1/3  ">
            <Icons.ArrowUp />

            <Box className="-mt-2">
              <Percent value={42.1} />
            </Box>
          </Box>

          <Box className="absolute left-[63.6%] -translate-x-1/3">
            <Box className="invisible">
              <Icons.ArrowUp />
            </Box>
            <Box className="-mt-2">
              <Percent value={63.6} />
            </Box>
          </Box>

          <Box className="absolute left-[72.01%] -translate-x-1/3">
            <Box className="invisible">
              <Icons.ArrowUp />
            </Box>
            <Box className="-mt-2">
              <Percent value={72.01} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;

const Percent = ({ value }: { value: number }) => {
  return (
    <Typography
      variant="body3"
      fontWeight={600}
      lineHeight={"24px"}
      className=" !text-[#4E5B72] font-number"
    >
      {value} %
    </Typography>
  );
};
