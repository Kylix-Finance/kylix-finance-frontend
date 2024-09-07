"use client";

import { Info } from "@mui/icons-material";
import { Box, Slider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Icons } from "~/assets/svgs";

const marks = [
  {
    value: 42.1,
    label: "42.1 %",
  },
  {
    value: 63.6,
    label: "63.6 %",
  },
  {
    value: 72.01,
    label: "72.01 %",
  },
];

function valuetext(value: number) {
  return `${value} %`;
}

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

      <Box>
        <Slider
          aria-label="Always visible"
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          sx={{
            "& .MuiSlider-thumb": {
              visibility: "hidden",
            },
          }}
          valueLabelDisplay="off"
        />
      </Box>
    </Box>
  );
};

export default ProgressBar;
