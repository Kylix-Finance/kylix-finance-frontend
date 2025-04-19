"use client";
import styles from "./index.module.scss";
import LinkButton from "~/components/ui/link-button";
import Button from "~/components/ui/button";
import IconButton from "~/components/ui/icon-button";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
import DiscordIcon from "~/assets/icons/discord";
import Glob from "~/assets/icons/glob";
import Moon from "~/assets/icons/moon";
import Sun from "~/assets/icons/sun";
import { useEffect, useState } from "react";
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
      <IconButton
        icon={theme === "light" ? Moon : Sun}
        onClick={() => {
          switchTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <IconButton
        icon={theme === "light" ? Moon : Sun}
        mode="none"
        onClick={() => {
          switchTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <Button icon={Glob} isLoading={true}>
        Connect
      </Button>
      <Button icon={Glob} disabled={true}>
        Connect
      </Button>
      <Button icon={Glob} disabled={true}>
        Connect
      </Button>
      <Button icon={Glob} size="small">
        Connect
      </Button>
      <Button variant="secondary">Connect</Button>
      <Button variant="tertiary">Connect</Button>
      <LinkButton href="#">Test</LinkButton>
    </div>
  );
};
export default Dashboard;
