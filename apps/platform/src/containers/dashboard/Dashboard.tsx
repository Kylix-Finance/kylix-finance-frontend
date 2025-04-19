"use client";
import styles from "./Dashboard.module.scss";
import LinkButton from "~/components/ui/link-button/LinkButton";
import Button from "~/components/ui/button/‌Button";
import IconButton from "~/components/ui/icon-button/IconButton";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
import Glob from "~/assets/icons/glob";
import Moon from "~/assets/icons/moon";
import Sun from "~/assets/icons/sun";
import { Checkbox } from "~/components/ui/checkbox";
const Dashboard = () => {
  const { switchTheme, theme } = useThemeSwitcher();

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Checkbox
        label="Dark mode"
        checked={theme === "dark"}
        defaultChecked={theme === "dark"}
        onChange={(e) => {
          switchTheme(e.target.checked ? "dark" : "light");
        }}
      />
      <Checkbox label="Dark mode" checked />
    </div>
  );
};
export default Dashboard;
