import React from "react";
import {
  ButtonPropsVariantOverrides,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import { TypographyVariantsOptions } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface PaletteColor {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  }
  interface TypographyVariantsOptions {}
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    // lg: React.CSSProperties;
    // md: React.CSSProperties;
    // s: React.CSSProperties;
    // xl: React.CSSProperties;
    // xs: React.CSSProperties;
    body3: TypographyStyleOptions | undefined;
  }

  interface TypographyVariantsOptions {
    // lg?: React.CSSProperties;
    // md?: React.CSSProperties;
    // s?: React.CSSProperties;
    // xl?: React.CSSProperties;
    // xs?: React.CSSProperties;
    body3?: TypographyStyleOptions | undefined;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {}
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lg: true;
    md: true;
    s: true;
    xl: true;
    xs: true;
    body3: true;
  }
}
