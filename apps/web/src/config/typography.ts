import { TypographyOptions } from "@mui/material/styles/createTypography";
import { fonts } from "~/assets/fonts";

export const typography: TypographyOptions = {
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
};
