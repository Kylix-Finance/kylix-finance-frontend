"use client";

import { createTheme } from "@mui/material/styles";
import ThemeLink from "./themeComponents/ThemeLink";

let theme = createTheme({
  palette: {
    background: {
      default: "#F4FAF9",
      paper: "#F4FAF9",
    },
    error: {
      dark: "#F07979",
      main: "#F07979",
      light: "#F07979",
    },
    info: {
      main: "#50A0E1",
      dark: "#50A0E1",
      light: "#50A0E1",
    },
    primary: {
      light: "#45A996",
      main: "#45A996",
      dark: "#45A996",
    },
    secondary: {
      dark: "#A67B97",
      light: "#A67B97",
      main: "#A67B97",
    },
    success: {
      dark: "#45A996",
      main: "#45A996",
      light: "#45A996",
    },
    text: {
      disabled: "#9ea3ac",
      primary: "#5C5E64",
      secondary: "#dacfd8",
    },
    warning: {
      dark: "#FAAA56",
      main: "#FAAA56",
      light: "#FAAA56",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiLink: {
      defaultProps: {
        component: ThemeLink,
      },
    },
  },
});

export { theme };
