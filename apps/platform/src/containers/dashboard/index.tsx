"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Button from "~/components/ui/button";
import { useThemeSwitcher } from "~/hooks/useThemeSwitcher";
const Dashboard = () => {
  const { switchTheme } = useThemeSwitcher();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

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
      <Button
        onClick={() => switchTheme("dark")}
        variant="primary"
        isLoading={isLoading}
        icon="swimming-pool"
      >
        Connect
      </Button>
      <Button
        onClick={() => switchTheme("light")}
        variant="secondary"
        isLoading={isLoading}
        icon="swimming-pool"
      >
        Connect
      </Button>
      <Button variant="tertiary" isLoading={isLoading} icon="swimming-pool">
        Connect
      </Button>
      <Button
        variant="primary"
        size="large"
        isLoading={isLoading}
        icon="swimming-pool"
      >
        Connect
      </Button>
      <Button variant="primary" size="large" isLoading={isLoading}>
        Connect
      </Button>
      <Button variant="primary" size="small" isLoading={isLoading}>
        Connect
      </Button>
    </div>
  );
};
export default Dashboard;
