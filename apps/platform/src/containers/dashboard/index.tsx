"use client";
import styles from "./index.module.scss";
import LinkButton from "~/components/ui/link-button";
const Dashboard = () => {
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
      <LinkButton href="/" disabled>
        Hi
      </LinkButton>
    </div>
  );
};
export default Dashboard;
