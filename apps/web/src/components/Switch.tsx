"use client";
import { styled, Switch as MuiSwitch } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";
import { ThemeMode } from "~/hooks/usePreferences";

export const Switch = styled(MuiSwitch)(({ theme }) => {
  const [mode] = useLocalStorage<ThemeMode>("theme-mode", "light");

  return {
    width: 25,
    height: 16,
    padding: 0,

    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(7px)",
        color: theme.palette.background.default,
        "& + .MuiSwitch-track": {
          backgroundColor: "#56DDB4",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#56DDB4",
        border: `6px solid ${theme.palette.background.default}`,
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.secondary.dark,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 14,
      height: 14,
      marginTop: -1,
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      backgroundColor: mode === "light" ? "#E9E9EA" : "#84A8A133",
      opacity: 1,
    },
  };
});
