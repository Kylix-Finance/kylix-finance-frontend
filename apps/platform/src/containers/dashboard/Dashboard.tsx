"use client";

import styles from "./Dashboard.module.scss";
import { notify } from "~/components/ui/alert";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    notify({
      message: "Lorem ipsum dolor sit amet consectetur.",
      title: "Information",
      mode: "error",
    });
    notify({
      message: "Lorem ipsum dolor sit amet consectetur.",
      title: "Information",
      mode: "message",
    });
    notify({
      message: "Lorem ipsum dolor sit amet consectetur.",
      title: "Information",
      mode: "success",
    });
    notify({
      message: "Lorem ipsum dolor sit amet consectetur.",
      title: "Information",
      mode: "warning",
    });
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
    ></div>
  );
};
export default Dashboard;
