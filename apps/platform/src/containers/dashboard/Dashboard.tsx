"use client";
import styles from "./Dashboard.module.scss";
import IconButton from "~/components/ui/icon-button/IconButton";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
import Moon from "~/assets/icons/moon";
import Sun from "~/assets/icons/sun";
import { Sidebar } from "~/components/sidebar/Sidebar";
import { Switch } from "~/components/ui/switch";
import { useState } from "react";
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
      <Switch
        name="Dark mode"
        checked={theme === "dark"}
        onChange={(e) => switchTheme(e.target.checked ? "dark" : "light")}
      />
      <Switch name="s" checked />
      <Switch name="s1" />
      <Switch name="sw" disabled />
      <Switch name="sw" disabled checked />
    </div>
  );
};
export default Dashboard;
