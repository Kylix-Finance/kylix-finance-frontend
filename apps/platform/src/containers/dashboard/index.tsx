"use client";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
import styles from "./index.module.scss";
const Dashboard = () => {
  const { theme, switchTheme } = useThemeSwitcher();

  return (
    <div className={styles.container}>
      <button onClick={() => switchTheme(theme === "dark" ? "light" : "dark")}>
        change to {theme === "dark" ? "light" : "dark"} theme
      </button>
    </div>
  );
};
export default Dashboard;
