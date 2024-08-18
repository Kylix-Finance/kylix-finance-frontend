"use client";
import { Box, TextField } from "@mui/material";
import { useQueryState } from "nuqs";
import { Icons } from "~/assets/svgs";
import { QUEY_SEARCH_MARKETS } from "~/constants";

export const RightComponent = () => {
  const [searchQuery, setSearchQuery] = useQueryState(QUEY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <TextField
      onChange={(e) => handleSearch(e.target.value)}
      style={{
        fontSize: "10px",
        borderRadius: "4px",
        border: "#C7C7C7 1px solid",
      }}
      placeholder="Search by market"
      size="small"
      defaultValue={searchQuery}
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
