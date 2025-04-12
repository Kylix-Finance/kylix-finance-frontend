import { createTheme, TypographyVariantsOptions } from "@mui/material";
import { grey } from "./colors";
import { fonts } from "../assets/fonts";

const { breakpoints } = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

const baseTypography = {
  color: grey[800],
  fontFamily: fonts.inter.style.fontFamily,
};

export const typography: TypographyVariantsOptions = {
  allVariants: baseTypography,
  fontFamily: "Inter, sans-serif",
  display: {
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: "32px",
    [breakpoints.up("md")]: {
      fontSize: "36px",
    },
    [breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  h1: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: "26px",
    [breakpoints.up("md")]: {
      fontSize: "28px",
    },
    [breakpoints.up("lg")]: {
      fontSize: "32px",
    },
  },
  h2: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: "20px",
    [breakpoints.up("md")]: {
      fontSize: "22px",
    },
    [breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: "18px",
    [breakpoints.up("md")]: {
      fontSize: "19px",
    },
    [breakpoints.up("lg")]: {
      fontSize: "20px",
    },
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: "16px",
    [breakpoints.up("md")]: {
      fontSize: "17px",
    },
    [breakpoints.up("lg")]: {
      fontSize: "18px",
    },
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: "16px",
  },
  body: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "16px",
  },
  bodyCompact: {
    ...baseTypography,
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  bodyCompactBold: {
    ...baseTypography,
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  bodySmall: {
    ...baseTypography,
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  btn: {
    ...baseTypography,
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
};
