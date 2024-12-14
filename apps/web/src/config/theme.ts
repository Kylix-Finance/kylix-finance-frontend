"use client";

import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export const theme = createTheme({
  palette: {
    mode: "light",
    ...palette,
  },
  typography,
  components,
});
