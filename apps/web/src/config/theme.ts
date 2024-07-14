"use client";

import { createTheme } from "@mui/material/styles";
import ThemeLink from "./themeComponents/ThemeLink";
import { fonts } from "~/assets/fonts";
import { palette } from "./palette";

// TODO: Move colors to palette
export const theme = createTheme({
  palette,
  typography: {
    fontFamily: fonts.inter.style.fontFamily,
    xs: {
      color: "#1A433B80",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    s: {
      color: "#1A433B80",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    md: {
      color: "#1A433B",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "-0.28px",
    },
    lg: {
      color: "#1A433B",
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: "-0.32px",
      lineHeight: "125%",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: palette.text.primary,
        },
      },
      defaultProps: {
        component: ThemeLink,
      },
    },
    MuiSwitch: {},
  },
});
