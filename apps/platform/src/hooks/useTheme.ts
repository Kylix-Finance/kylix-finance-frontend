"use client";

import { useTheme as useNextTheme } from "next-themes";
import { Theme } from "~/types";

export function useTheme() {
  const { setTheme, theme = "system" } = useNextTheme();
  const switchTheme = (theme: Theme) => setTheme(theme);

  return {
    theme: theme as Theme,
    switchTheme,
  };
}
