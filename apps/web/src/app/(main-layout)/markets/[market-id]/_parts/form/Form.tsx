"use client";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from "@mui/material";
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { List, ListItem, TokenIcon } from "~/components";
import { getDecimalRegex, handleInputChange } from "~/utils";
import AlertContainer from "../AlertContainer";
import { LoadingButton } from "@mui/lab";
import { FormAlert } from "~/components/FormAlert";

interface SubmitButton {
  content: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
}

interface Props {
  items: ListItem[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  decimals?: number;
  submitButton: SubmitButton;
  error?: string | null;
  assetId: number | string;
  isSubmitting?: boolean;
  onMaxClick: () => void;
  isMaxLoading?: boolean;
  balance: string | undefined;
  symbol: string | undefined;
}

export const Form = ({
  items,
  setValue,
  value,
  decimals,
  submitButton,
  error,
  assetId,
  isSubmitting = false,
  onMaxClick,
  isMaxLoading = false,
  balance,
  symbol,
}: Props) => {
  const isInputEmpty = Number(value) === 0;
  const isInsufficientBalance = Number(value) > Number(balance);

  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <Box flexDirection="column" gap="6px" alignItems="center" display="flex">
        <Box
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
          className="!w-full"
        >
          <p className="text-primary-800 font-bold text-sm leading-5">Amount</p>
          <Button
            disabled={isMaxLoading}
            className="!text-primary-500 !capitalize"
            variant="text"
            disableElevation
            size="small"
            onClick={onMaxClick}
          >
            Max
          </Button>
        </Box>
        <TextField
          value={value}
          onChange={(e) => handleInputChange(e, setValue, decimals || 6)}
          size="small"
          fullWidth
          placeholder="0"
          className="!font-number !text-base !text-primary-800"
          error={!!error}
          helperText={error}
          inputMode="numeric"
          autoComplete="off"
          sx={{
            fontWeight: "bold",
            borderRadius: "6px",
            lineHeight: "20px",
          }}
          inputProps={{
            className: "!font-number",
          }}
          FormHelperTextProps={{
            sx: {
              fontWeight: "bold",
            },
          }}
          InputProps={{
            sx: {
              backgroundColor: "#45A9961A",
              paddingY: "8px",
              paddingX: "16px",
            },
            className: "!font-number",
            startAdornment: (
              <InputAdornment position="start" className="">
                <TokenIcon symbol={symbol} width={24} height={24} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <List items={items} />
      <LoadingButton
        variant="contained"
        size="large"
        disableElevation
        onClick={submitButton.onclick}
        disabled={isInputEmpty || isInsufficientBalance}
        loading={isSubmitting}
      >
        {submitButton.content}
      </LoadingButton>
      <AlertContainer>
        {isInsufficientBalance && (
          <FormAlert severity="error" message="Insufficient Balance!" />
        )}
      </AlertContainer>
    </Box>
  );
};
