import { ThemeMode } from "@repo/ui";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const usePreferences = (initMode: ThemeMode = "light") => {
  const [value, setValue] = useLocalStorage<ThemeMode>("theme-mode", initMode);

  const getInitialMode = (): ThemeMode => {
    if (typeof window === "undefined") return initMode;
    if (value) return value;
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return isDarkMode ? "dark" : "light";
  };

  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setValue(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [mode]);

  const toggle = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return {
    mode,
    toggle,
  };
};

export { type ThemeMode };

export default usePreferences;
