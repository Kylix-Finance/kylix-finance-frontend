"use client";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useIsDarkMode } from "@repo/ui";
import { useState } from "react";
import { Card, TokenIcon } from "~/components";

const percentages = ["25", "50", "75", "100"];

const MOCK_AMOUNT = 34700;

const PositionManagementForm = () => {
  const [deposit, setDeposit] = useState("10");
  const [amount, setAmount] = useState("");

  const isDarkMode = useIsDarkMode();

  return (
    <Box className="w-full p-4 rounded-md">
      <Box className="mb-2 flex justify-between items-center">
        <Typography variant="h6" className="dark:text-primary-100">
          Deposit / Convert
        </Typography>
        <Typography
          variant="body3"
          className="text-primary-500 dark:text-primary-100"
        >
          {MOCK_AMOUNT.toLocaleString()}{" "}
          <Box
            component="span"
            className="text-primary-500 dark:text-primary-100"
          >
            Dot
          </Box>
        </Typography>
      </Box>
      <TextField
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        className="!rounded-md !font-number !font-bold !text-base text-primary-800 dark:text-primary-100 !leading-5"
        inputMode="numeric"
        autoComplete="off"
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
      />
      <Box className="flex gap-1 mt-2 mb-6">
        {percentages.map((percentage) => (
          <Button
            key={percentage}
            variant="outlined"
            className="flex-1"
            onClick={() =>
              setDeposit(String((+percentage * MOCK_AMOUNT) / 100))
            }
          >
            {percentage}%
          </Button>
        ))}
      </Box>

      <Box className="mb-2 flex justify-between items-center mt-6">
        <Typography variant="h6" className="dark:text-primary-100">
          Borrow
        </Typography>
      </Box>
      <TextField
        inputProps={{
          className: "!font-number dark:text-primary-100",
        }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        className="!rounded-md !font-number !font-bold !text-base !text-primary-800 !leading-5"
        inputMode="numeric"
        autoComplete="off"
        InputProps={{
          sx: {
            backgroundColor: "#45A9961A",
            paddingY: "8px",
            paddingX: "16px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <TokenIcon symbol="USDT" width={24} height={24} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default PositionManagementForm;
