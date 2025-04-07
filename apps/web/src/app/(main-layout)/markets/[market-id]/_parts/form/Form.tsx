"use client";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { List, ListItem, TokenIcon } from "~/components";
import { handleInputChange } from "~/utils";
import AlertContainer from "../AlertContainer";
import { FormAlert } from "~/components/FormAlert";
import PrivateButton from "~/components/PrivateButton/PrivateButton";

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
      <Box alignItems="center" display="flex" flexDirection="column" gap="6px">
        <Box
          alignItems="center"
          className="!w-full"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <p className="text-[#707F7A] font-bold text-sm leading-5">Amount</p>
          <Button
            disableElevation
            className="text-[#45A996] lowercase font-[700] leading-6 text-[14px]"
            disabled={isMaxLoading}
            size="small"
            variant="text"
            onClick={onMaxClick}
          >
            max
          </Button>
        </Box>
        <TextField
          fullWidth
          autoComplete="off"
          className="!font-number !text-base !text-primary-800"
          error={!!error}
          FormHelperTextProps={{
            sx: {
              fontWeight: "bold",
            },
          }}
          helperText={error}
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
            className: "!font-number",
            startAdornment: (
              <InputAdornment position="start">
                <TokenIcon height={24} symbol={symbol} width={24} />
              </InputAdornment>
            ),
          }}
          placeholder="0"
          size="small"
          sx={{
            fontWeight: "bold",
            borderRadius: "6px",
            lineHeight: "20px",
          }}
          value={value}
          onChange={(e) => handleInputChange(e, setValue, decimals || 6)}
        />
      </Box>
      <List items={items} />
      <div className="flex w-full gap-1">
        <PrivateButton
          disableElevation
          className="w-full text-white dark:text-[#0d0d0d] min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60 font-body"
          disabled={isInputEmpty || isInsufficientBalance}
          loading={isSubmitting}
          size="large"
          variant="contained"
          onClick={submitButton.onclick}
        >
          {submitButton.content}
        </PrivateButton>
        {secondButton && (
          <PrivateButton
            disableElevation
            className="w-full text-white dark:text-[#0d0d0d] font-body min-h-[36px] text-[14px] font-[700] leading-[19px] dark:disabled:bg-[#45A996]/50 dark:disabled:text-[#0d0d0d]/60"
            disabled={secondButton.disabled}
            loading={isSubmitting}
            size="large"
            variant="contained"
            onClick={secondButton.onclick}
          >
            {secondButton.content}
          </PrivateButton>
        )}
      </div>
      <AlertContainer>
        {isInsufficientBalance && (
          <FormAlert message="Insufficient Balance!" severity="error" />
        )}
      </AlertContainer>
    </Box>
  );
};
