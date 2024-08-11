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
import { List, ListItem } from "~/components";
import { getDecimalRegex } from "~/utils";
import AlertContainer from "../AlertContainer";
import { useBalance } from "@repo/onchain-utils";
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
  decimals: number;
  submitButton: SubmitButton;
  error?: string | null;
  assetId: number | string;
  isSubmitting?: boolean;
  onMaxClick: () => void;
  isMaxLoading?: boolean;
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
}: Props) => {
  const { formattedBalance } = useBalance({
    assetId: assetId,
  });

  const handleInputChange: TextFieldProps["onChange"] = ({
    target: { value },
  }) => {
    // TODO: Wrap this `if` check in some utility or something
    if (value === "") return setValue(value);
    const isValid = getDecimalRegex(decimals).test(value);
    if (isValid) setValue(value);
  };

  const isInputEmpty = Number(value) === 0;
  const isInsufficientBalance = Number(value) > Number(formattedBalance);

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
          onChange={handleInputChange}
          size="small"
          fullWidth
          className="!rounded-md !font-number !font-bold !text-base !text-primary-800 !leading-5"
          error={!!error}
          helperText={error}
          inputMode="numeric"
          autoComplete="off"
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
            startAdornment: (
              <InputAdornment position="start" className="">
                <Typography color="#aB5D0CB" variant="subtitle1">
                  $
                </Typography>
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
