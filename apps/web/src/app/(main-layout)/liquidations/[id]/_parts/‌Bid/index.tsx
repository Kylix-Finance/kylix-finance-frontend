"use client";

import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  formatUnit,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
// import { BASE_ASSET_ID } from "@repo/shared";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useLocalStorage } from "usehooks-ts";
import { notify, TokenIcon } from "~/components";
import { usePlaceBid } from "~/hooks/chain/usePlaceBid";
import { useParams } from "next/navigation";
import { useGetMarketBidDistribution } from "~/hooks/chain/useGetMarketBidDistribution";
import { Skeleton } from "@repo/ui";
const percentages = ["25", "50", "75", "100"];

const BASE_ASSET_ID = 2;
const Bid = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: marketBidDistribution,
    isLoading: isGetMarketBidDistributionLoading,
  } = useGetMarketBidDistribution({ assetId: id });

  const [discount, setDiscount] = useState("");
  const [amount, setAmount] = useState("");

  const [value] = useLocalStorage("theme-mode", "light");
  const isDarkMode = value === "dark";

  const { assetMetaData, isPending: isMetadataLoading } =
    useMetadata(BASE_ASSET_ID);
  const {
    balance,
    formattedBalance,
    isLoading: isBalanceLoading,
  } = useBalance({
    assetId: BASE_ASSET_ID,
  });
  const { mutate: placeBid, isPending: isPlaceBidLoading } = usePlaceBid({
    asset: id,
  });

  const handlePlaceBid = () => {
    if (!balance || !assetMetaData) return;
    placeBid(
      {
        balance: parseUnit(amount, assetMetaData.decimals),
        discount: Number(discount),
        onConfirm: () => {
          setDiscount("");
          setAmount("");
        },
      },
      {
        onSuccess: ({ blockNumber }) => {
          notify({
            type: "success",
            title: "Success",
            message: "Transaction completed on block " + blockNumber,
          });
        },
      }
    );
  };

  const clickPercentage = (p: string) => {
    if (!balance) return;
    setAmount(((Number(p) / 100) * Number(formattedBalance)).toString());
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
    if (!balance) {
      return toast.error("Your balance is not available", {
        toastId: "balance-not-available",
      });
    }

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
  const isLoading = isPlaceBidLoading;
  const isDisabled = isBalanceLoading || isMetadataLoading;
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
      <Skeleton isLoading={isGetMarketBidDistributionLoading} height="90px">
        <Select
          value={discount}
          onChange={(e) => changeDiscount(e.target.value)}
          size="small"
          fullWidth
          className="font-number text-primary-800"
          error={!!error}
          sx={{
            "& .MuiSelect-icon": {
              color: isDarkMode ? "#daeeea" : "#1c443c",
            },
          }}
          inputProps={{
            sx: {
              backgroundColor: "#45A9961A",
              paddingY: "16px",
              paddingX: "16px",
            },
            className: "!font-number dark:text-primary-100",
            startAdornment: (
              <InputAdornment position="start" className="font-body">
                %
              </InputAdornment>
            ),
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#222222",
                color: "#daeeea",
              },
            },
          }}
        >
          {marketBidDistribution &&
            marketBidDistribution[0].supported_discounts.map((item, key) => (
              <MenuItem
                key={key}
                value={item}
                className="!font-number dark:text-primary-100"
              >
                {item}
              </MenuItem>
            ))}
        </Select>
      </Skeleton>
      <Box className="mb-2 flex justify-between items-center mt-6 dark:text-primary-100">
        <Typography variant="body2">Bid amount</Typography>
        <Typography variant="subtitle1">
          <span>{formattedBalance}</span>{" "}
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
        loading={isLoading}
        className="w-full text-white dark:text-[#0d0d0d] font-body min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60"
        variant="contained"
        onClick={handlePlaceBid}
        disabled={isDisabled}
      >
        Place My Bid
      </LoadingButton>
    </Box>
  );
};

export default Bid;
