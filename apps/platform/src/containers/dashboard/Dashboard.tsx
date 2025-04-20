"use client";

import { ButtonGroup } from "~/components/ui/button-group";
import styles from "./Dashboard.module.scss";
import Sun from "~/assets/icons/sun";
import Moon from "~/assets/icons/moon";
import { useState } from "react";
import { IconButton } from "~/components/ui/icon-button";
import Swap from "~/assets/icons/swap";
import { ButtonGroupTab, Theme } from "~/types";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
const tabs: ButtonGroupTab<Theme>[] = [
  {
    content: "Auto",
    value: "system",
  },
  {
    content: <Sun width={24} height={24} />,
    value: "light",
  },
  {
    content: <Moon width={24} height={24} />,
    value: "dark",
  },
];
const Dashboard = () => {
  const { theme, switchTheme } = useThemeSwitcher();
  const handleItemClick = (theme: Theme) => {
    switchTheme(theme);
  };
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
      <ButtonGroup<Theme>
        tabs={tabs}
        defaultTab={theme}
        onItemClick={handleItemClick}
      />
      <IconButton icon={Swap} />
    </div>
  );
};
export default Dashboard;
