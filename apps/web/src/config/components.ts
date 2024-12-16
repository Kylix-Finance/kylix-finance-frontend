import { Components, Theme } from "@mui/material";
import { palette } from "./palette";
import ThemeLink from "./themeComponents/ThemeLink";

export const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        padding: "4px 12px",
      },
      contained: {
        color: palette.background.default,
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
      input: (props) => ({
        fontSize: "16px",
        color: "#1A433B",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: props.style?.fontWeight || 700,
        lineHeight: "140%" /* 22.4px */,
      }),
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
};
