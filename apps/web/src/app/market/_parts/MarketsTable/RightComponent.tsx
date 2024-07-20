import { Box, TextField } from "@mui/material";
import { Icons } from "~/assets/svgs";

export const RightComponent = () => {
  return (
    <TextField
      style={{
        fontSize: "10px",
      }}
      placeholder="Search by market"
      size="small"
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
