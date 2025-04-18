"use client";
import IconButton from "~/components/ui/icon-button";
import styles from "./index.module.scss";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
const Dashboard = () => {
  const { switchTheme } = useThemeSwitcher();
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
      <IconButton />
    </div>
  );
};
export default Dashboard;
