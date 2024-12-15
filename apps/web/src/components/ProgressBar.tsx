/* eslint-disable react/prop-types */
"use client";

import { Box, Typography, Zoom } from "@mui/material";
import { Skeleton } from "@repo/ui";
import { isUndefined } from "lodash";
import Image from "next/image";
import { Icons } from "~/assets/svgs";
import { Tooltip } from "./Tooltip";

export interface Props {
  data: Partial<{ current: number; sale: number; target: number }> | undefined;
  isLoading: boolean;
}

const ProgressBar: React.FC<Props> = ({ data = {}, isLoading }) => {
  const { current = 0, sale = 0, target = 0 } = data;
  const palette = {
    current: " #45A996",
    sale: "#EA8E3A",
    target: "#F07979",
  };
  const gradients = {
    current: " rgba(90, 195, 181,1)",
    sale: "rgba(242, 179, 102, 1)",
    target: "rgba(255, 186, 186, 1)",
  };
  const progressBarColor =
    current < sale
      ? palette.current
      : current > target
        ? palette.target
        : palette.sale;

  const gradientColor =
    current < sale
      ? gradients.current
      : current > target
        ? gradients.target
        : gradients.sale;
  if (
    isUndefined(current) ||
    isUndefined(sale) ||
    isUndefined(target) ||
    isLoading
  ) {
    return (
      <Skeleton height="95px" isLoading={isLoading}>
        <Box className="flex justify-center items-center h-[95px]">
          Not Available
        </Box>
      </Skeleton>
    );
  }

  const fn = (val: number) => {
    const n = 100 - val;
    if (n === 0) return val - 1;
    return val;
  };

  const fixedSale = fn(sale);
  const fixedTarget = fn(target);

  return (
    <Box className="flex flex-col gap-4 h-[95px]">
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
            badge: (
              <Box
                className={`size-[14px] bg-[${palette.sale}] rounded-[2px]`}
              />
            ),
            label: "Sale LTV",
          },
          {
            badge: (
              <Box
                className={`size-[14px] bg-[${palette.target}] rounded-[2px]`}
              />
            ),
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
        <Box
          style={{
            width: "100%",
          }}
          className="relative h-4 bg-[#ECF6F4] dark:bg-black-600 rounded-[4px] overflow-hidden"
        >
          <Box
            className="h-full"
            style={{
              width: `${current}%`,
              backgroundImage: `repeating-linear-gradient(-45deg, ${gradientColor}, ${gradientColor} 2px, ${progressBarColor} 2px, ${progressBarColor} 6px)`,
            }}
          />
          <Box
            style={{ left: `${fixedSale}%` }}
            className={`absolute top-0 h-full w-[5px] bg-orange-400 rounded`}
          />
          <Box
            style={{ left: `${fixedTarget}%` }}
            className={`absolute top-0 h-full w-[5px] bg-red-400 rounded`}
          />
        </Box>

        <Box className="pb-6">
          <Box
            style={{ left: `${current}%` }}
            className="absolute -translate-x-1/3 w-[35px]"
          >
            <Icons.ArrowUp style={{ color: progressBarColor }} />
            <Box className="-mt-2">
              <Percent value={current} />
            </Box>
          </Box>

          <Box
            style={{ left: `${fixedSale}%` }}
            className="absolute -translate-x-1/3 w-[35px]"
          >
            <Box className="invisible">
              <Icons.ArrowUp />
            </Box>
            <Box className="-mt-2">
              <Percent value={sale} />
            </Box>
          </Box>

          <Box
            style={{ left: `${fixedTarget}%` }}
            className="absolute -translate-x-1/3 w-[35px]"
          >
            <Box className="invisible">
              <Icons.ArrowUp />
            </Box>
            <Box className="-mt-2">
              <Percent value={target} />
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
    <Tooltip
      sx={(theme) => ({
        [`& .MuiTooltip-tooltip`]: {
          backgroundColor: theme.palette.secondary[100],
          color: theme.palette.secondary[900],
        },
      })}
      TransitionComponent={Zoom}
      title={value}
    >
      <Typography
        variant="body3"
        fontWeight={600}
        lineHeight={"24px"}
        style={{ width: "max-content" }}
        className=" text-[#4E5B72] dark:text-primary-100 font-number flex"
      >
        {value.toFixed(2)} %
      </Typography>
    </Tooltip>
  );
};
