/* eslint-disable unused-imports/no-unused-imports */
import {
  ButtonPropsVariantOverrides,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import { TypographyVariantsOptions } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";

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

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
