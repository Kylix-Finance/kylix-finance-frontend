"use client";

import { createTheme } from "@mui/material";
import { typography } from "./typography";
import { palette } from "./colors";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { components } from "./components";
export const theme = createTheme({
  palette,
  shadows,
  spacing: (key) => spacing[key],
  typography,
  components,
});
