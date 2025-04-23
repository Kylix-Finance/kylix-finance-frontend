"use client";

import PageLayout from "~/layouts/page/PageLayout";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <div className={styles.container}>
        <div className={styles.total_locked}>Chart 1</div>
        <div className={styles.total_supply_borrow}>Chart 2</div>
        <div className={styles.table_container}>table</div>
      </div>
    </PageLayout>
  );
};
export default Dashboard;
