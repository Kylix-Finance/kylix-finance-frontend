"use client";
import { Box, Typography } from "@mui/material";
import {
  fixPrecision,
  formatBigNumbers,
  formatUnit,
} from "@repo/onchain-utils";
import { LineBreak } from "~/components";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { useGetUserLtv } from "~/hooks/chain/useGetUserLtv";

const BorrowValue = () => {
  const { data: assetWiseBorrowCollateral } =
    useGetAssetWiseBorrowsCollaterals();

  const totalBorrowed = formatUnit(
    assetWiseBorrowCollateral?.totalBorrowed || 0,
    4
  );
  const { data: ltv } = useGetUserLtv();
  console.log("______________ltv", ltv);

  return (
    <Box className="flex flex-col h-full gap-4">
      <Box className="flex flex-col p-4 border border-primary-700/10 rounded-md">
        <Box>
          <Typography
            variant="subtitle2"
            lineHeight="21px"
            className="dark:text-[#5C6965]"
          >
            Total Borrowed Value
          </Typography>
        </Box>
        <Box className="flex gap-1.5 items-center dark:text-black-100">
          <Typography
            variant="h5"
            fontStyle="bold"
            lineHeight="30px"
            className="font-number"
          >
            ${" "}
            {!isNaN(+totalBorrowed)
              ? Number(totalBorrowed).toLocaleString()
              : 0}
          </Typography>

          <Typography
            variant="body3"
            fontStyle="bold"
            fontWeight="400"
            lineHeight="17px"
          >
            USD
          </Typography>
        </Box>
      </Box>

      <Box className="flex flex-col h-full gap-4 p-4 border border-primary-700/10 rounded-md">
        <Box className="flex flex-col gap-1.5">
          <Box>
            <Typography className="!text-[12px] !font-[500] text-[#1A433B80] dark:text-[#5C6965] !leading-[18px]">
              Borrow limit
            </Typography>
          </Box>

          <Box className="flex gap-[6px] items-center dark:text-black-100">
            <Typography
              variant="subtitle1"
              lineHeight="22px"
              className="font-number"
            >
              $
              {!isNaN(Number(ltv?.borrowLimit))
                ? Number(ltv?.borrowLimit || 0).toLocaleString()
                : 0}
            </Typography>
            <Typography variant="body3" lineHeight="17px">
              USD
            </Typography>
          </Box>
        </Box>

        <LineBreak />

        <Box className="flex">
          <Box className="flex flex-col gap-1.5 w-1/2">
            <Typography
              variant="body3"
              fontWeight={500}
              lineHeight="18px"
              className="text-primary-800/50 dark:text-[#5C6965]"
            >
              Net Earn APR
            </Typography>

            <Typography
              variant="subtitle1"
              lineHeight={"22px"}
              className="text-primary-500 font-number"
            >
              0%
            </Typography>
          </Box>

          <Box className="flex flex-col gap-[6px] w-[50%]">
            <Typography
              variant="body3"
              fontWeight={500}
              lineHeight="18px"
              className="text-primary-800/50 dark:text-[#5C6965]"
            >
              LTV
            </Typography>

            <Typography
              variant="subtitle1"
              lineHeight={"22px"}
              className="text-primary-500 font-number"
            >
              {ltv?.currentLtv || 0} %
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BorrowValue;
