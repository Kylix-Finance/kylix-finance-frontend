import { TextFieldProps } from "@mui/material";
import { formatUnit } from "@repo/onchain-utils";
import { clsx, type ClassValue } from "clsx";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const formatNumber = (input: number | string) => {
  const num = Number(input);
  if (isNaN(num)) return input;

  if (num < 1000) return num.toString();
  const suffix = num < 1000000 ? "k" : "m";
  const divisor = num < 1000000 ? 1000 : 1000000;
  return (num / divisor).toFixed(num % divisor === 0 ? 0 : 1) + suffix;
};
export const numToLocalString = (num: number) => num.toLocaleString();

export const getDecimalRegex = (decimals: number) => {
  return new RegExp(`^(0|[1-9]\\d{0,19})(\\.\\d?\\d{0,${decimals - 1}})?$`);
};

export const handleInputChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setValue: Dispatch<SetStateAction<any>>,
  decimals: number
) => {
  const { value } = event.target;

  // TODO: Wrap this `if` check in some utility or something
  if (value === "") {
    setValue(value);
    return;
  }

  // Validate the input using the provided or default decimal places
  const isValid = getDecimalRegex(decimals).test(value);

  if (isValid) {
    setValue(value);
  }
};

export const formatPercentage = (value: number | string, decimals: number) =>
  isNaN(Number(formatUnit(value, decimals)))
    ? "0%"
    : `${Number(formatUnit(value, decimals)).toFixed(2)}%`;
