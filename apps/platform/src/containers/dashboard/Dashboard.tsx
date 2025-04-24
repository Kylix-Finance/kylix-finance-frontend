"use client";

import PageLayout from "~/layouts/page/PageLayout";
import styles from "./Dashboard.module.scss";
import TotalLocked from "./total-locked/TotalLocked";
import TotalSupplyBorrow from "./total-supply-borrow/TotalSupplyBorrow";
import MarketTable from "./market-table";
import LiquidationTable from "./liquidation-table";

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <div className={styles.container}>
        <div className={styles.total_locked}>
          <TotalLocked />
        </div>
        <div className={styles.total_supply_borrow}>
          <TotalSupplyBorrow />
        </div>
        <div className={styles.table_container}>
          <MarketTable />
          <LiquidationTable />
        </div>
      </div>
    </PageLayout>
  );
};
export default Dashboard;
