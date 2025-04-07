"use client";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TokenIcon } from "~/components";

const percentages = ["25", "50", "75", "100"];

const MOCK_AMOUNT = 34700;

const PositionManagementForm = () => {
  const [deposit, setDeposit] = useState("10");
  const [amount, setAmount] = useState("");

  return (
    <Box className="w-full p-4 rounded-md">
      <Box className="mb-2 flex justify-between items-center">
        <Typography className="dark:text-primary-100" variant="h6">
          Deposit / Convert
        </Typography>
        <Typography
          className="text-primary-500 dark:text-primary-100"
          variant="body3"
        >
          {MOCK_AMOUNT.toLocaleString()}{" "}
          <Box
            className="text-primary-500 dark:text-primary-100"
            component="span"
          >
            Dot
          </Box>
        </Typography>
      </Box>
      <TextField
        fullWidth
        autoComplete="off"
        className="!rounded-md !font-number !font-bold !text-base text-primary-800 dark:text-primary-100 !leading-5"
        inputMode="numeric"
        inputProps={{
          className: "!font-number dark:text-primary-100",
        }}
        InputProps={{
          sx: {
            backgroundColor: "#45A9961A",
            paddingX: "16px",
            paddingY: "8px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <TokenIcon symbol="dot" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Typography className="text-secondary-900 dark:text-secondary-100">
                DOT
              </Typography>
            </InputAdornment>
          ),
        }}
        placeholder="0"
        size="small"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
      />
      <Box className="flex gap-1 mt-2 mb-6">
        {percentages.map((percentage) => (
          <Button
            key={percentage}
            className="flex-1"
            variant="outlined"
            onClick={() =>
              setDeposit(String((+percentage * MOCK_AMOUNT) / 100))
            }
          >
            {percentage}%
          </Button>
        ))}
      </Box>

      <Box className="mb-2 flex justify-between items-center mt-6">
        <Typography className="dark:text-primary-100" variant="h6">
          Borrow
        </Typography>
      </Box>
      <TextField
        fullWidth
        autoComplete="off"
        className="!rounded-md !font-number !font-bold !text-base !text-primary-800 !leading-5"
        inputMode="numeric"
        inputProps={{
          className: "!font-number dark:text-primary-100",
        }}
        InputProps={{
          sx: {
            backgroundColor: "#45A9961A",
            paddingY: "8px",
            paddingX: "16px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <TokenIcon height={24} symbol="USDT" width={24} />
            </InputAdornment>
          ),
        }}
        placeholder="0"
        size="small"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </Box>
  );
};

export default PositionManagementForm;
