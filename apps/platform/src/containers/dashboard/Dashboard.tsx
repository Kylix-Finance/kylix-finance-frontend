"use client";
import styles from "./Dashboard.module.scss";
import IconButton from "~/components/ui/icon-button/IconButton";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
import Moon from "~/assets/icons/moon";
import Sun from "~/assets/icons/sun";
import { Sidebar } from "~/components/sidebar/Sidebar";
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
      <Sidebar />
      <IconButton
        icon={theme === "light" ? Moon : Sun}
        onClick={() => {
          switchTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </div>
  );
};
export default Dashboard;
