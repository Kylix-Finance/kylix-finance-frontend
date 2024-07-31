"use client";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { List, ListItem } from "~/components";
import { getDecimalRegex } from "~/utils";

interface Props {
  items: ListItem[];
}

// eslint-disable-next-line react/prop-types
export const Form: React.FC<Props> = ({ items }) => {
  const [value, setValue] = useState("");

  const handleInputChange: TextFieldProps["onChange"] = ({
    target: { value },
  }) => {
    // TODO: Wrap this `if` check in some utility or something
    if (value === "") return setValue(value);
    const isValid = getDecimalRegex(6).test(value);
    if (isValid) setValue(value);
  };

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
            className="!text-primary-500 !capitalize"
            variant="text"
            disableElevation
            size="small"
          >
            Max
          </Button>
        </Box>
        <TextField
          value={value}
          onChange={handleInputChange}
          size="small"
          fullWidth
          className="!rounded-md !font-number !font-bold !text-base bg-primary-500/10 !text-primary-800 !leading-5 !py-2 !px-1"
          inputMode="numeric"
          InputProps={{
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
      <Button
        variant="contained"
        className="!capitalize !text-white !text-xs !font-semibold !leading-5 !text-center !rounded !py-2 !px-3"
        size="large"
        disableElevation
      >
        Supply
      </Button>
    </Box>
  );
};
