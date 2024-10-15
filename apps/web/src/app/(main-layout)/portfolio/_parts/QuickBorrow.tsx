"use client";

import { Box, Button, Card as MuiCard, Typography } from "@mui/material";
import {
  formatBigNumbers,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
import { useState } from "react";
import { Icons } from "~/assets/svgs";
import { Card, List } from "~/components";
import { InputWithSelect } from "~/components/InputWithSelect";
import { useAssetPrice } from "~/hooks/chain/useAssetPrice";
import { usePools } from "~/hooks/chain/usePools";
import { useQuickBorrow } from "~/hooks/chain/useQuickBorrow";
import { SelectOption } from "~/types";

const QuickBorrow = () => {
  const { pools } = usePools();
  const options: SelectOption[] =
    pools?.map((pool) => ({
      value: pool.assetId.toString(),
      label: pool.assetName,
    })) || [];
  const { mutate } = useQuickBorrow();

  const [supplyPool, setSupplyPool] = useState<SelectOption>();
  const [supplyValue, setSupplyValue] = useState<string>("");
  const [borrowPool, setBorrowPool] = useState<SelectOption>();
  const [borrowValue, setBorrowValue] = useState<string>("");

  const { formattedPrice: supplyAssetPrice } = useAssetPrice({
    assetId: supplyPool?.value || 0,
  });
  const { formattedBalance: supplyAssetBalance } = useBalance({
    assetId: supplyPool?.value,
  });
  const supplyValueInUSD = formatBigNumbers(
    (Number(supplyValue || 0) * Number(supplyAssetPrice || 0)).toString(),
    2
  );
  const { assetMetaData: supplyAssetMetadata } = useMetadata(supplyPool?.value);

  const { formattedPrice: borrowAssetPrice } = useAssetPrice({
    assetId: borrowPool?.value || 0,
  });
  const { formattedBalance: borrowAssetBalance } = useBalance({
    assetId: borrowPool?.value,
  });
  const borrowValueInUSD = formatBigNumbers(
    (Number(borrowValue || 0) * Number(borrowAssetPrice || 0)).toString(),
    2
  );
  const { assetMetaData: borrowAssetMetadata } = useMetadata(borrowPool?.value);

  console.log("_____)))))),borrowAssetPrice", borrowAssetPrice);
  console.log("_____)))))),supplyAssetPrice", supplyAssetPrice);

  const borrowHandler = () => {
    mutate({
      borrowPoolId: borrowPool?.value || "0",
      borrowValue: parseUnit(
        borrowValue,
        borrowAssetMetadata?.decimals || 6
      ).toString(),
      supplyPoolId: supplyPool?.value || "0",
      supplyValue: parseUnit(
        supplyValue,
        supplyAssetMetadata?.decimals || 6
      ).toString(),
    });
  };

  return (
    <Card title="Quick Market" className="w-full justify-between items-end">
      <Box className="flex justify-between w-full gap-5">
        <Box className="flex flex-col  gap-3 w-full">
          <MuiCard
            square
            variant="outlined"
            className="flex flex-col  gap-3 w-full"
          >
            <Typography variant="subtitle1" fontSize={"1rem"}>
              Deposit
            </Typography>
            <Box className="flex flex-col gap-1.5">
              <Box className="flex justify-between w-full items-center">
                <Typography
                  className="text-secondary-800"
                  variant="subtitle1"
                  fontSize={".875rem"}
                >
                  Amount
                </Typography>
                <Box className="flex gap-0.5 h-6">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                  >
                    {formatBigNumbers(supplyAssetBalance || "0", 2)}
                  </Typography>
                  <Typography className="text-primary-300" variant="subtitle2">
                    {supplyPool?.label}
                  </Typography>
                </Box>
              </Box>
              <InputWithSelect
                options={options}
                pool={supplyPool}
                setPool={setSupplyPool}
                setValue={setSupplyValue}
                maxValue={supplyAssetBalance || "0"}
              />
              <List
                items={[{ label: "Total Value", value: supplyValueInUSD }]}
              />
            </Box>
          </MuiCard>
          <List
            items={[
              { label: "LTV", value: "0.00%" },
              { label: "Borrow fee", value: "0.110 KYL" },
            ]}
          />
        </Box>
        <div className="w-14 h-14 mt-24">
          <Icons.ArrowRight className="text-primary-500 " />
        </div>
        <Box className="flex flex-col  gap-3  w-full">
          <MuiCard
            square
            variant="outlined"
            className="flex flex-col  gap-3  w-full"
          >
            <Typography variant="subtitle1" fontSize={"1rem"}>
              Borrow
            </Typography>
            <Box className="flex flex-col gap-1.5">
              <Box className="flex justify-between w-full items-center">
                <Typography
                  className="text-secondary-800"
                  variant="subtitle1"
                  fontSize={".875rem"}
                >
                  Amount
                </Typography>
                <Box className="flex gap-0.5 h-6">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                  >
                    {formatBigNumbers(borrowAssetBalance || "0", 2)}
                  </Typography>
                  <Typography className="text-primary-300" variant="subtitle2">
                    {borrowPool?.label}
                  </Typography>
                </Box>
              </Box>
              <InputWithSelect
                options={options}
                pool={borrowPool}
                setPool={setBorrowPool}
                setValue={setBorrowValue}
                maxValue={borrowAssetBalance || "0"}
              />
              <List
                items={[{ label: "Total Value", value: borrowValueInUSD }]}
              />
            </Box>
          </MuiCard>
          <List
            items={[
              { label: "MAX LTV", value: "60.00%" },
              { label: "Interest Rate", value: "8.2%" },
            ]}
          />
        </Box>
      </Box>
      <Button variant="contained" size="large" onClick={borrowHandler}>
        Quick Barrow
      </Button>
    </Card>
  );
};

export default QuickBorrow;
