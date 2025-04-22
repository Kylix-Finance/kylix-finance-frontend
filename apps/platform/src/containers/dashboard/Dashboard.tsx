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
import Modal from "~/components/ui/modal/Modal";
import { Button } from "~/components/ui/button";
import {
  ConnectButton,
  DisconnectButton,
} from "~/components/modal/wallet-modal";
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
  const [isOpen, setIsOpen] = useState(false);
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
      <DisconnectButton />
      <ConnectButton />
    </div>
  );
};
export default Dashboard;
