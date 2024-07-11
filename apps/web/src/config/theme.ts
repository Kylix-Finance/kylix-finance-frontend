"use client";

import { createTheme } from "@mui/material/styles";
import ThemeLink from "./themeComponents/ThemeLink";
import { fonts } from "~/assets/fonts";
import { palette } from "./palette";

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: fonts.inter.style.fontFamily,
  },
  components: {
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
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 36,
          height: 20,
          padding: 0,
          display: "flex",
          alignItems: "center",
        },
        thumb: {
          width: 16,
          height: 16,
          borderRadius: "50%",
          boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
          transition: "transform 200ms",
        },
        track: {
          borderRadius: 20 / 2,
          backgroundColor: "rgba(0,0,0,.25)",
          opacity: 1,
          boxSizing: "border-box",
        },
      },
    },
  },
});
