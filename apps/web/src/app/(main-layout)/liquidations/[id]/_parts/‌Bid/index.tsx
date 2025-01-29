"use client";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Card, TokenIcon } from "~/components";

const percentages = ["25", "50", "75", "100"];

const MOCK_AMOUNT = 1700;

const Bid = () => {
  const [discount, setDiscount] = useState("10");
  const [amount, setAmount] = useState("");

  return (
    <Box className="w-full p-4 border rounded-md z-[999] lg:w-[360px] dark:bg-black-500 dark:border-transparent">
      <Box className="mb-6">
        <Typography variant="body1" className="text-primary-100">
          Place a Bid
        </Typography>
      </Box>
      <Box className="mb-2">
        <Typography variant="body2" className="text-primary-100">
          Premium (discount)
        </Typography>
      </Box>
      <TextField
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
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
          className: "!font-number dark:text-primary-100",
          startAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
      />
      <Box className="mb-2 flex justify-between items-center mt-6 dark:text-primary-100">
        <Typography variant="body2">Bid amount</Typography>
        <Typography variant="subtitle1">
          {MOCK_AMOUNT} <span className="text-primary-400">USDT</span>{" "}
        </Typography>
      </Box>
      <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        className="!rounded-md !font-number !font-bold !text-base !leading-5"
        inputMode="numeric"
        autoComplete="off"
        InputProps={{
          sx: {
            backgroundColor: "#45A9961A",
            paddingY: "8px",
            paddingX: "16px",
          },
          className: "!font-number dark:text-primary-100",
          startAdornment: (
            <InputAdornment position="start">
              <TokenIcon symbol="USDT" width={24} height={24} />
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
            onClick={() => setAmount(String((+percentage * MOCK_AMOUNT) / 100))}
          >
            {percentage}%
          </Button>
        ))}
      </Box>
      <Button className="w-full" variant="contained">
        Place My Bid
      </Button>
    </Box>
  );
};

export default Bid;
