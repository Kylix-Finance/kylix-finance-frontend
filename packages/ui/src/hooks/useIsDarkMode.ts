import { useLocalStorage } from "usehooks-ts";

export type ThemeMode = "light" | "dark";

export const useIsDarkMode = () => {
  const [value] = useLocalStorage<ThemeMode>("theme-mode", "light");

  return value === "dark";
};
