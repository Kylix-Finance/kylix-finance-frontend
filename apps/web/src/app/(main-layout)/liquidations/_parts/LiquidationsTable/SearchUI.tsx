"use client";

import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { Icons } from "~/assets/svgs";

type SearchUIProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const SearchUI = ({ value = "", onChange }: SearchUIProps) => {
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={onChangeHandler}
      style={{
        fontSize: "10px",
        borderRadius: "4px",
        border: "#C7C7C7 1px solid",
        width: "100%",
      }}
      placeholder="Search by market"
      size="small"
      inputProps={{
        style: {
          fontWeight: "normal",
        },
      }}
      InputProps={{
        style: {
          backgroundImage: "none",
          color: "#C7C7C7",
          fontSize: "14px",
        },
        startAdornment: (
          <Box className="pr-2">
            <Icons.Search />
          </Box>
        ),
      }}
    />
  );
};

export default SearchUI;
