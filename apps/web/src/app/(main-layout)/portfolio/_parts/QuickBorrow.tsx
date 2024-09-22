"use client";

import { Box, Button, Card as MuiCard, Typography } from "@mui/material";
import { useBalance } from "@repo/onchain-utils";
import { useState } from "react";
import { Card, List, ListItem } from "~/components";
import { InputWithSelect } from "~/components/InputWithSelect";
import { PoolSelect } from "~/components/PoolSelect";
import { useAssetPrice } from "~/hooks/chain/useAssetPrice";
import { usePools } from "~/hooks/chain/usePools";
import { SelectOption } from "~/types";

const QuickBorrow = () => {
  const { pools } = usePools();
  const options: SelectOption[] =
    pools?.map((pool) => ({
      value: pool.assetId.toString(),
      label: pool.assetName,
    })) || [];

  const [supplyPool, setSupplyPool] = useState<SelectOption>();
  const [supplyValue, setSupplyValue] = useState<string>("");
  const [borrowPool, setBorrowPool] = useState<SelectOption>();
  const [borrowValue, setBorrowValue] = useState<string>("");

  const { assetPrice: supplyAssetPrice } = useAssetPrice({
    assetId: supplyPool?.value || 0,
  });
  const { formattedBalance: supplyAssetBalance } = useBalance({
    assetId: supplyPool?.value,
  });
  const supplyValueInUSD =
    Number(supplyValue || 0) * Number(supplyAssetPrice || 0);

  const { assetPrice: borrowAssetPrice } = useAssetPrice({
    assetId: borrowPool?.value || 0,
  });
  const { formattedBalance: borrowAssetBalance } = useBalance({
    assetId: supplyPool?.value,
  });
  const borrowValueInUSD =
    Number(borrowValue || 0) * Number(borrowAssetPrice || 0);

  return (
    <Card title="Quick Market" className="w-full justify-between items-end">
      <Box className="flex justify-between w-full gap-5">
        <Box className="flex flex-col  gap-3 w-full">
          <MuiCard
            square
            variant="outlined"
            className="flex flex-col  gap-3 w-full"
          >
            <Typography variant="subtitle1" fontSize={"16px"}>
              Deposit
            </Typography>
            <Box className="flex flex-col gap-1.5">
              <Box className="flex justify-between w-full items-center">
                <Typography
                  className="text-secondary-800"
                  variant="subtitle1"
                  fontSize={"14px"}
                >
                  Amount
                </Typography>
                <Box className="flex gap-0.5 h-6">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                  >
                    {supplyAssetBalance}
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
        <Box className="flex flex-col  gap-3  w-full">
          <MuiCard
            square
            variant="outlined"
            className="flex flex-col  gap-3  w-full"
          >
            <Typography variant="subtitle1" fontSize={"16px"}>
              Borrow
            </Typography>
            <Box className="flex flex-col gap-1.5">
              <Box className="flex justify-between w-full items-center">
                <Typography
                  className="text-secondary-800"
                  variant="subtitle1"
                  fontSize={"14px"}
                >
                  Amount
                </Typography>
                <Box className="flex gap-0.5 h-6">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                  >
                    {borrowAssetBalance}
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
      <Button variant="contained" size="large">
        Quick Barrow
      </Button>
    </Card>
  );
};

export default QuickBorrow;
