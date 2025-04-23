import Sun from "~/assets/icons/sun";
import { ButtonGroup } from "../ui/button-group";
import Moon from "~/assets/icons/moon";

const tabs = [
  {
    content: "Auto",
    value: "auto" as const,
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
  return <ButtonGroup tabs={tabs} activeTab="auto" setActiveTab={(e) => e} />;
};
