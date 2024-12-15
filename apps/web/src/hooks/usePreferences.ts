import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

type Mode = "light" | "dark";

const usePreferences = (initMode: Mode = "light") => {
  const { value, setValue } = useLocalStorage<Mode>({
    key: "theme-mode",
  });

  const getInitialMode = (): Mode => {
    if (typeof window === "undefined") return initMode;
    if (value) return value;
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return isDarkMode ? "dark" : "light";
  };

  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setValue(mode);
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

export default usePreferences;
