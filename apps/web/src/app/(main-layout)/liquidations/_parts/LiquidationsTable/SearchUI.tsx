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
      className="text-xs  rounded border border-[#C7C7C7] w-full font-body"
      placeholder="Search by market"
      size="small"
      inputProps={{
        className: "font-normal",
      }}
      InputProps={{
        className: "bg-none text-[#C7C7C7] text-[14px]  font-body",
        startAdornment: (
          <Box className="pr-2 ">
            <Icons.Search />
          </Box>
        ),
      }}
    />
  );
};

export default SearchUI;
