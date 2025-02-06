"use client";

import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useBalance } from "@repo/onchain-utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { TokenIcon } from "~/components";
import { usePlaceBid } from "~/hooks/chain/usePlaceBid";

const percentages = ["25", "50", "75", "100"];
const MOCKED_ASSET = 20;

const Bid = () => {
  const [discount, setDiscount] = useState("");
  const [amount, setAmount] = useState("");

  const { balance, isLoading } = useBalance({ assetId: MOCKED_ASSET });
  const { mutate: placeBid, isPending } = usePlaceBid({ asset: MOCKED_ASSET });
  const handlePlaceBid = () => {
    if (!balance) return;
    placeBid(
      {
        balance,
        discount: Number(discount),
      },
      {
        onSuccess: (data) => {
          console.log("______data", data);
        },
      }
    );
  };

  const clickPercentage = (p: string) => {
    setDiscount(p);
  };

  const changeDiscount = (value: string) => {
    if (value === "") return setDiscount("");

    const test = new RegExp(`^(100|[1-9]?[0-9])$`).test(value);
    if (test) setDiscount(value);
    else
      toast.error("Percentage should be a number between 0-100", {
        toastId: "discount-percentage-error",
      });
  };

  const changeAmount = (value: string) => {
    if (value === "") return setAmount("");
    if (!balance)
      return toast.error("Your balance is not available", {
        toastId: "balance-not-available",
      });

    const numValue = Number(value);
    const numBalance = Number(balance);
    console.log(numValue, numBalance);

    const regex = new RegExp(`^(0|[1-9]\\d?|${balance})$`);
    const test = regex.test(value);
    if (test && numValue <= numBalance) setAmount(value);
    else
      toast.error(`Amount should be a number between 0-${balance}`, {
        toastId: "amount-error",
      });
  };

  const error = "";

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
        onChange={(e) => changeDiscount(e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        className="!font-number !text-base !text-primary-800"
        inputMode="numeric"
        autoComplete="off"
        error={!!error}
        helperText={error}
        FormHelperTextProps={{
          sx: {
            fontWeight: "bold",
          },
        }}
        inputProps={{
          backgroundColor: "#45A9961A",
          paddingY: "8px",
          paddingX: "16px",
          className: "!font-number dark:text-primary-100",
        }}
        InputProps={{
          sx: {
            backgroundColor: "#45A9961A",
            paddingY: "8px",
            paddingX: "16px",
          },
          startAdornment: (
            <InputAdornment position="start" className="font-body">
              %
            </InputAdornment>
          ),
        }}
      />
      <Box className="mb-2 flex justify-between items-center mt-6 dark:text-primary-100">
        <Typography variant="body2">Bid amount</Typography>
        <Typography variant="subtitle1">
          <span>{balance || 0}</span>{" "}
          <span className="text-primary-400">USDT</span>
        </Typography>
      </Box>
      <TextField
        value={amount}
        onChange={(e) => changeAmount(e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        className="!rounded-md !font-number !font-bold !text-base !leading-5"
        inputMode="numeric"
        autoComplete="off"
        inputProps={{
          backgroundColor: "#45A9961A",
          paddingY: "8px",
          paddingX: "16px",
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
              <TokenIcon symbol="USDT" width={24} height={24} />
            </InputAdornment>
          ),
        }}
      />
      <Box className="flex gap-1 mt-2 mb-6">
        {percentages.map((p) => (
          <Button
            key={p}
            variant="outlined"
            className="flex-1"
            onClick={() => clickPercentage(p)}
          >
            {p}%
          </Button>
        ))}
      </Box>
      <LoadingButton
        loading={isPending || isLoading}
        className="w-full text-white dark:text-[#0d0d0d] font-body min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60"
        variant="contained"
        onClick={handlePlaceBid}
      >
        Place My Bid
      </LoadingButton>
    </Box>
  );
};

export default Bid;
