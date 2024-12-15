"use client";
import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import useLocalStorage from "~/hooks/useLocalStorage";
import { ThemeMode } from "~/hooks/usePreferences";

export const ThemeSwitch = styled(Switch)(({ theme }) => {
  const { value: mode } = useLocalStorage<ThemeMode>({
    key: "theme-mode",
  });

  return {
    width: 42,
    height: 24,
    padding: 0,
    display: "flex",
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(17px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: mode === "dark" ? "#1A433B80" : "#EAEFED",
          opacity: 1,
          border: mode === "dark" ? "#1A433B80" : "#EAEFED",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgba(0, 35, 11, 0.2)",
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "#34d399",
    },
    "& .MuiSwitch-track": {
      borderRadius: 24 / 2,
      opacity: 1,
      backgroundColor: theme.palette.secondary[200],
      boxSizing: "border-box",
    },
  };
});
