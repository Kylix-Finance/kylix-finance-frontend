"use client";

import { createTheme } from "@mui/material/styles";
import ThemeLink from "./themeComponents/ThemeLink";
import { fonts } from "~/assets/fonts";
import { palette } from "./palette";

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: fonts.inter.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: "52px",
      lineHeight: "125%",
      letterSpacing: "-2%",
    },
    h2: {
      fontWeight: 700,
      fontSize: "44px",
      lineHeight: "125%",
    },
    h3: {
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "125%",
    },
    h4: {
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: "140%",
    },
    h5: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "140%",
    },
    h6: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "140%",
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "-2%",
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "150%",
    },
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "150%",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "150%",
    },
    body3: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "150%",
    },
    caption: {
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "150%",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          padding: "4px 12px",
        },
      },
    },
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
        input: {
          fontSize: "16px",
          color: "#1A433B",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "140%" /* 22.4px */,
        },
        inputAdornedStart: {
          fontWeight: 700,
          fontSize: "16px",
        },
        adornedStart: {
          fontWeight: 700,
          fontSize: "16px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 25,
          height: 16,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          margin: 2,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(7px)",
            color: palette.background.default,
            "& + .MuiSwitch-track": {
              backgroundColor: palette.primary.main,
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: palette.primary.main,
            border: `6px solid ${palette.background.default}`,
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color: palette.secondary.dark,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7,
          },
        },
        thumb: {
          boxSizing: "border-box",
          width: 14,
          height: 14,
          marginTop: -1,
        },
        track: {
          borderRadius: 16 / 2,
          backgroundColor: "#E9E9EA",
          opacity: 1,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 16,
        },
      },
    },
  },
});
