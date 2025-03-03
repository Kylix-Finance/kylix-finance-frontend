"use client";

import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  formatBigNumbers,
  formatUnit,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { notify, TokenIcon } from "~/components";
import { usePlaceBid } from "~/hooks/chain/usePlaceBid";
import { useParams } from "next/navigation";
import { useGetMarketBidDistribution } from "~/hooks/chain/useGetMarketBidDistribution";
import { Skeleton } from "@repo/ui";
import { FormAlert } from "~/components/FormAlert";
import { formatNumber, getDecimalRegex } from "~/utils";
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

  let amountError = "";
  const numFormattedBalance = Number(formattedBalance);
  const numAmount = Number(amount);
  if (numAmount > numFormattedBalance)
    amountError = `Amount should be a number between 0-${numFormattedBalance}`;
  if (numAmount < 10) amountError = "The minimum amount is 10";
  if (!numFormattedBalance) amountError = "Insufficient balance";
  if (amount === "") amountError = "";

  const handlePlaceBid = () => {
    if (!balance || !assetMetaData || !amount) return;

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
  };

  const changeAmount = (value: string) => {
    if (value === "") return setAmount("");

    const maxNumTest = new RegExp(
      `^(0|[1-9]d*(.d+)?)|(${numFormattedBalance})$`
    );

    const decimalTest = getDecimalRegex(6);

    if (maxNumTest.test(value) && decimalTest.test(value)) setAmount(value);
  };

  const isSubmitLoading = isPlaceBidLoading;
  const isSubmitDisabled =
    isBalanceLoading ||
    isMetadataLoading ||
    !balance ||
    !assetMetaData ||
    !!amountError ||
    !amount;

  return (
    <Box className="w-full p-4 border rounded-md z-[999] lg:w-[360px] dark:bg-black-500 dark:border-transparent">
      <Box className="mb-6">
        <Typography
          variant="body1"
          fontWeight="bold"
          className="text-primary-800 dark:text-primary-100"
        >
          Place a Bid
        </Typography>
      </Box>
      <Box className="mb-2">
        <Typography
          variant="body2"
          className="text-primary-800 dark:text-primary-100"
        >
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
            className:
              "!font-number dark:text-primary-100 w-full flex justify-between",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: isDarkMode ? "#222222" : undefined,
                color: isDarkMode ? "#daeeea" : undefined,
              },
            },
          }}
          displayEmpty
          renderValue={(selected) => {
            if (selected === "") {
              return (
                <span className="font-thin w-full flex justify-between opacity-50">
                  <span>10%</span>
                  <span>100.00 k</span>
                </span>
              );
            }

            const selectedItem = marketBidDistribution?.[1].find(
              (item) => item.discount === Number(selected)
            );

            if (!selectedItem) return selected;

            return (
              <span className="w-full flex justify-between font-normal">
                <span>{selectedItem.discount} %</span>
                <span>
                  $ {formatBigNumbers(formatUnit(selectedItem.amount, 6), 2)}
                </span>
              </span>
            );
          }}
        >
          <MenuItem
            value=""
            disabled
            className="w-full flex justify-between font-thin"
          >
            <span>discount</span>
            <span>volume</span>
          </MenuItem>
          {marketBidDistribution &&
            marketBidDistribution[1].map((item, key) => (
              <MenuItem
                key={key}
                value={item.discount}
                className="!font-number dark:text-primary-100 flex justify-between w-full"
              >
                <span>{item.discount} %</span>
                <span>$ {formatBigNumbers(formatUnit(item.amount, 6), 2)}</span>
              </MenuItem>
            ))}
        </Select>
      </Skeleton>
      <Box className="mb-2 flex justify-between items-center mt-6 dark:text-primary-100">
        <Typography variant="body2">Bid amount</Typography>
        <Typography variant="subtitle1">
          <span>{formatNumber(formattedBalance || 0)}</span>{" "}
          <span className="text-primary-400">USDT</span>
        </Typography>
      </Box>
      <Stack className="gap-1">
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
              paddingX: "16px",
              paddingY: "8px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <TokenIcon symbol="USDT" width={24} height={24} />
              </InputAdornment>
            ),
          }}
        />
        {amountError && <FormAlert message={amountError} severity="error" />}
      </Stack>

      <Box className="flex gap-1 mt-2 mb-6 ">
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
        loading={isSubmitLoading}
        className="w-full text-white dark:text-[#0d0d0d] font-body min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60"
        variant="contained"
        onClick={handlePlaceBid}
        disabled={isSubmitDisabled}
      >
        Place My Bid
      </LoadingButton>
    </Box>
  );
};

export default Bid;
