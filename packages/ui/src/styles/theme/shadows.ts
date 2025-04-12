import { ThemeOptions } from "@mui/material";

export const shadowsObj = {
  modal: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
  linePurple:
    "0px 9px 18px 0px rgba(86, 221, 180, 0.40), 0px 6px 9px 0px rgba(86, 221, 180, 0.40), 0px 3px 3px 0px rgba(86, 221, 180, 0.40)",
  linePink:
    "0px 9px 18px 0px rgba(255, 98, 200, 0.40), 0px 6px 9px 0px rgba(255, 98, 200, 0.40), 0px 3px 3px 0px rgba(255, 98, 200, 0.40)",
  lineBlue:
    "0px 9px 18px 0px rgba(96, 165, 250, 0.40), 0px 6px 9px 0px rgba(96, 165, 250, 0.40), 0px 3px 3px 0px rgba(96, 165, 250, 0.40)",
  lineGreen:
    "0px 9px 18px 0px rgba(92, 197, 43, 0.40), 0px 6px 9px 0px rgba(92, 197, 43, 0.40), 0px 3px 3px 0px rgba(92, 197, 43, 0.40)",
  success: "0px 0px 10px 0px rgba(0, 255, 17, 0.23)",
  warning: "0px 0px 10px 0px rgba(245, 158, 11, 0.25)",
  risk: "0px 0px 10px 0px rgba(225, 29, 72, 0.25)",
  blur: "backdrop-filter: blur(7.5px)",
  default: "0px 0px 25px 0px rgba(18, 18, 18, 0.06)",
};

export const shadows: ThemeOptions["shadows"] = [
  "none",
  shadowsObj.modal,
  shadowsObj.linePurple,
  shadowsObj.linePink,
  shadowsObj.lineBlue,
  shadowsObj.lineGreen,
  shadowsObj.success,
  shadowsObj.warning,
  shadowsObj.risk,
  shadowsObj.blur,
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
];
