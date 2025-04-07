"use client";
import { Box, Typography } from "@mui/material";
import { formatUnit } from "@repo/onchain-utils";
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
            className="dark:text-[#5C6965]"
            lineHeight="21px"
            variant="subtitle2"
          >
            Total Borrowed Value
          </Typography>
        </Box>
        <Box className="flex gap-1.5 items-center dark:text-black-100">
          <Typography
            className="font-number"
            fontStyle="bold"
            lineHeight="30px"
            variant="h5"
          >
            ${" "}
            {!isNaN(+totalBorrowed)
              ? Number(totalBorrowed).toLocaleString()
              : 0}
          </Typography>

          <Typography
            fontStyle="bold"
            fontWeight="400"
            lineHeight="17px"
            variant="body3"
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
              className="font-number"
              lineHeight="22px"
              variant="subtitle1"
            >
              $
              {!isNaN(Number(ltv?.borrowLimit))
                ? Number(ltv?.borrowLimit || 0).toLocaleString()
                : 0}
            </Typography>
            <Typography lineHeight="17px" variant="body3">
              USD
            </Typography>
          </Box>
        </Box>

        <LineBreak />

        <Box className="flex">
          <Box className="flex flex-col gap-1.5 w-1/2">
            <Typography
              className="text-primary-800/50 dark:text-[#5C6965]"
              fontWeight={500}
              lineHeight="18px"
              variant="body3"
            >
              Net Earn APR
            </Typography>

            <Typography
              className="text-primary-500 font-number"
              lineHeight="22px"
              variant="subtitle1"
            >
              0%
            </Typography>
          </Box>

          <Box className="flex flex-col gap-[6px] w-[50%]">
            <Typography
              className="text-primary-800/50 dark:text-[#5C6965]"
              fontWeight={500}
              lineHeight="18px"
              variant="body3"
            >
              LTV
            </Typography>

            <Typography
              className="text-primary-500 font-number"
              lineHeight="22px"
              variant="subtitle1"
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
