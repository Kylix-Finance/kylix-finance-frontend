"use client";

import { Tooltip } from "~/components/ui/tooltip";
import styles from "./Dashboard.module.scss";

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
      <Tooltip content="This is a tooltip" placement="auto" showArrow>
        Hover me
      </Tooltip>
    </div>
  );
};
export default Dashboard;
