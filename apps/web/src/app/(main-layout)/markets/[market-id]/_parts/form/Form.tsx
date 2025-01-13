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
  disabled?: boolean;
}

interface Props {
  assetId: number | string;
  balance: string | undefined;
  decimals?: number;
  error?: string | null;
  isMaxLoading?: boolean;
  isSubmitting?: boolean;
  items: ListItem[];
  onMaxClick: () => void;
  setValue: Dispatch<SetStateAction<string>>;
  submitButton: SubmitButton;
  secondButton?: SubmitButton;
  symbol: string | undefined;
  value: string;
}

export const Form = ({
  assetId,
  balance,
  decimals,
  error,
  isMaxLoading = false,
  isSubmitting = false,
  items,
  onMaxClick,
  setValue,
  submitButton,
  symbol,
  value,
  secondButton,
}: Props) => {
  const isInputEmpty = Number(value) === 0;
  const isInsufficientBalance = Number(value) > Number(balance);

  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <Box flexDirection="column" gap="6px" alignItems="center" display="flex">
        <Box
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="!w-full"
        >
          <p className="text-[#707F7A] font-bold text-sm leading-5">Amount</p>
          <Button
            disabled={isMaxLoading}
            className="text-[#45A996] lowercase font-[700] leading-6 text-[14px]"
            variant="text"
            disableElevation
            size="small"
            onClick={onMaxClick}
          >
            max
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
            className: "!font-number dark:text-primary-100",
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
              <InputAdornment position="start">
                <TokenIcon symbol={symbol} width={24} height={24} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <List items={items} />
      <div className="flex w-full gap-1">
        <LoadingButton
          variant="contained"
          size="large"
          disableElevation
          onClick={submitButton.onclick}
          disabled={isInputEmpty || isInsufficientBalance}
          loading={isSubmitting}
          className="w-full text-white dark:text-[#0d0d0d] font-[Poppins] min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60"
        >
          {submitButton.content}
        </LoadingButton>
        {secondButton && (
          <LoadingButton
            variant="contained"
            size="large"
            disableElevation
            onClick={secondButton.onclick}
            disabled={secondButton.disabled}
            loading={isSubmitting}
            className="w-full text-white dark:text-[#0d0d0d] font-[Poppins] min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60"
          >
            {secondButton.content}
          </LoadingButton>
        )}
      </div>
      <AlertContainer>
        {isInsufficientBalance && (
          <FormAlert
            severity="error"
            message="Insufficient Balance!"
            className=""
          />
        )}
      </AlertContainer>
    </Box>
  );
};
