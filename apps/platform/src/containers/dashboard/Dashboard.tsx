"use client";
import styles from "./Dashboard.module.scss";
import LinkButton from "~/components/ui/link-button/LinkButton";
import Button from "~/components/ui/button/‌Button";
import IconButton from "~/components/ui/icon-button/IconButton";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
import Glob from "~/assets/icons/glob";
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
