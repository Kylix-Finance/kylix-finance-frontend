"use client";

import { Box, Button, Card as MuiCard, Typography } from "@mui/material";
import { useState } from "react";
import { Card, List, ListItem } from "~/components";
import { InputWithSelect } from "~/components/InputWithSelect";
import { PoolSelect } from "~/components/PoolSelect";
import { SelectOption } from "~/types";
const items: ListItem[] = [
  {
    label: "1200 USDC",
    value: "$1320",
  },
  {
    label: "Total Value",
    value: "$1320",
  },
];
const QuickBorrow = () => {
  const [supplyPool, setSupplyPool] = useState<SelectOption>();
  const [supplyValue, setSupplyValue] = useState<string>("");
  const [borrowPool, setBorrowPool] = useState<SelectOption>();
  const [borrowValue, setBorrowValue] = useState<string>("");

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
                <Box className="flex gap-0.5">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                  >
                    4200
                  </Typography>
                  <Typography className="text-primary-300" variant="subtitle2">
                    USDC
                  </Typography>
                </Box>
              </Box>
              <InputWithSelect
                pool={supplyPool}
                setPool={setSupplyPool}
                setValue={setSupplyValue}
              />
              <List items={items} />
            </Box>
          </MuiCard>
          <List items={items} />
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
                <Box className="flex gap-0.5">
                  <Typography
                    className="text-secondary-800"
                    variant="subtitle1"
                  >
                    4200
                  </Typography>
                  <Typography className="text-primary-300" variant="subtitle2">
                    USDC
                  </Typography>
                </Box>
              </Box>
              <InputWithSelect
                pool={borrowPool}
                setPool={setBorrowPool}
                setValue={setBorrowValue}
              />
              <List items={items} />
            </Box>
          </MuiCard>
          <List items={items} />
        </Box>
      </Box>
      <Button variant="contained" size="large">
        Quick Barrow
      </Button>
    </Card>
  );
};

export default QuickBorrow;
