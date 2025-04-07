"use client";
import { Box, Button, Typography } from "@mui/material";
import Doughnut from "~/components/Charts/DoughnutChart";
import { FinanceSummary } from "~/components";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
import { assetColors } from "~/constants";

const CollateralValue = () => {
  const { data: assetWiseBorrowCollateral } =
    useGetAssetWiseBorrowsCollaterals();

  const totalCollateral = formatUnit(
    assetWiseBorrowCollateral?.totalCollateral || 0,
    4
  );

  const data = assetWiseBorrowCollateral?.collateralAssets.map?.(
    (item, index) => ({
      label: item.assetSymbol,
      value:
        Number(formatUnit(item.usdtBalance || 0, 4)) / Number(totalCollateral),
      color: assetColors[index % 10] || "#ffffff",
      balance: formatBigNumbers(formatUnit(item.usdtBalance, 4), 2),
    })
  ) || [{ label: "Asset", color: "#ffffff", value: 100, balance: 0 }];

  return (
    <Box className="flex flex-col h-full">
      <Typography
        className="dark:text-black-100"
        marginBottom="36px"
        variant="h4"
      >
        {!isNaN(Number(totalCollateral))
          ? Number(totalCollateral).toLocaleString()
          : 0}
        <Typography variant="body3">USD</Typography>
      </Typography>
      <Box className="flex mb-auto gap-6">
        <Doughnut
          backgroundColor={data.map((item) => item.color)}
          data={data.map((item) => item.value)}
          labels={data.map((item) => item.label)}
        />

        <Box className="grid grid-cols-2 gap-4">
          {data.map((item) => {
            return (
              <div key={item.label}>
                <FinanceSummary
                  key={item.label}
                  color={item.color}
                  label={item.label}
                  value={item.balance}
                />
              </div>
            );
          })}
        </Box>
      </Box>

      <Box className="flex gap-3">
        <Box className="flex flex-col w-full py-3 px-4 border border-primary-800/10 rounded-[6px]">
          <Typography
            className="text-primary-800 dark:text-primary-300"
            fontWeight={700}
            lineHeight="15px"
            variant="caption"
          >
            KLX Price
          </Typography>

          <Typography
            className="text-primary-500 dark:text-primary-100"
            lineHeight="20px"
            variant="body1"
          >
            $ 0
          </Typography>
        </Box>
        <Box className="flex  w-full py-3 px-4 border border-primary-800/10 rounded-md justify-between items-end">
          <Box className="flex flex-col">
            <Typography
              className="text-primary-800 dark:text-primary-300"
              fontWeight={700}
              lineHeight="15px"
              variant="caption"
            >
              Rewards
            </Typography>

            <Typography
              className="text-primary-500 dark:text-primary-100"
              lineHeight="20px"
              variant="body1"
            >
              0<Typography variant="caption">KLX</Typography>
            </Typography>
          </Box>
          <div>
            <Button
              disabled
              disableElevation
              className="!capitalize !text-xs !font-semibold !leading-[13px] !text-center !rounded !py-1 !px-2 !min-h-0 dark:disabled:border-black-400 dark:disabled:text-black-400"
              size="small"
              variant="outlined"
            >
              <Typography
                className="capitalize text-center  min-h-0"
                fontWeight={600}
                lineHeight="13px"
                variant="caption"
              >
                Reward
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default CollateralValue;
