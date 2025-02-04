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
import { Card, TokenIcon } from "~/components";
import { usePlaceBid } from "~/hooks/chain/usePlaceBid";

const percentages = ["25", "50", "75", "100"];
const MOCKED_ASSET = 20;

const Bid = () => {
  const [discount, setDiscount] = useState<number>(0);
  const [amount, setAmount] = useState(0);

  const { balance, isLoading } = useBalance({ assetId: MOCKED_ASSET });
  const { mutate: placeBid, isPending } = usePlaceBid({ asset: MOCKED_ASSET });
  const handlePlaceBid = () => {
    if (!balance) return;
    placeBid(
      {
        balance,
        discount: 20,
      },
      {
        onSuccess: (data) => {
          console.log("______data", data);
        },
      }
    );
  };
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
        onChange={(e) => setDiscount(+e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        className="!rounded-md font-number font-bold !text-base !text-primary-800 !leading-5"
        inputMode="numeric"
        autoComplete="off"
        InputProps={{
          sx: {
            backgroundColor: "#45A9961A",
            paddingY: "8px",
            paddingX: "16px",
          },
          className: "font-number dark:text-primary-100",
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
          {10000} <span className="text-primary-400">USDT</span>{" "}
        </Typography>
      </Box>
      <TextField
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
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
            // onClick={() => setAmount((percentage * amount) / 100))}
          >
            {percentage}%
          </Button>
        ))}
      </Box>
      <LoadingButton
        loading={isPending}
        className="w-full"
        variant="contained"
        onClick={handlePlaceBid}
      >
        Place My Bid
      </LoadingButton>
    </Box>
  );
};

export default Bid;
