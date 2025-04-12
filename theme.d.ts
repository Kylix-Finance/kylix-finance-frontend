/* eslint-disable unused-imports/no-unused-imports */
import {
  ButtonProps,
  ButtonPropsVariantOverrides,
  IconButtonProps,
  IconButtonPropsVariantOverrides,
  PaletteColor as MuiPaletteColor,
  TabOwnProps,
  TabProps,
  TabPropsVariantOverrides,
  TypographyPropsVariantOverrides,
} from "@mui/material";

declare module "@mui/material/styles" {
  // interface PrimaryColor {
  //   "50": string;
  //   "100": string;
  //   "200": string;
  //   "300": string;
  //   "400": string;
  //   "500": string;
  //   "600": string;
  //   "700": string;
  //   "800": string;
  //   "900": string;
  // }

  interface TypographyVariants {
    display: React.CSSProperties;
    body: React.CSSProperties;
    body3: React.CSSProperties;
    bodyCompact: React.CSSProperties;
    bodyCompactBold: React.CSSProperties;
    bodySmall: React.CSSProperties;
    btn: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    body?: React.CSSProperties;
    body3?: React.CSSProperties;
    bodyCompact?: React.CSSProperties;
    bodyCompactBold?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    btn?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {}
}

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    variant?: ButtonProps["variant"];
  }
}
declare module "@mui/material/Tab" {
  interface TabOwnProps {
    variant?: "contained" | "outlined" | "text";
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    body: true;
    body3: true;
    bodyCompact: true;
    bodyCompactBold: true;
    bodySmall: true;
    btn: true;
  }
}

declare module "@mui/material/Tab" {
  interface TabPropsVariantOverrides {
    contained: true;
    outlined: true;
    text: true;
  }
}
