import Sun from "~/assets/icons/sun";
import { ButtonGroup } from "../ui/button-group";
import Moon from "~/assets/icons/moon";

export const ThemeSwitcher = () => {
  return (
    <ButtonGroup
      tabs={[
        {
          content: "Auto",
          value: "auto",
        },
        {
          content: <Sun />,
          value: "light",
        },
        {
          content: <Moon />,
          value: "dark",
        },
      ]}
    />
  );
};
