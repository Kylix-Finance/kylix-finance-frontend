import Sun from "~/assets/icons/sun";
import { ButtonGroup } from "../ui/button-group";
import Moon from "~/assets/icons/moon";
import { useTheme } from "~/hooks/useTheme";

const tabs = [
  {
    content: "Auto",
    value: "system" as const,
  },
  {
    content: <Sun />,
    value: "light" as const,
  },
  {
    content: <Moon />,
    value: "dark" as const,
  },
];

export const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <ButtonGroup tabs={tabs} activeTab={theme} setActiveTab={switchTheme} />
  );
};
