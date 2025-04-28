"use client";

import PageLayout from "~/layouts/page/PageLayout";
import styles from "./Dashboard.module.scss";
import TotalLocked from "./total-locked/TotalLocked";
import TotalSupplyBorrow from "./total-supply-borrow/TotalSupplyBorrow";
import Tables from "./tables";
import InputNumber from "~/components/inputs/input-number";

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <div className={styles.container}>
        <div className={styles.input}>
          <InputNumber
            availableTokens={["btc", "eth", "dot"]}
            selectedToken="btc"
            onTokenSelect={(e) => console.log(e)}
          />
        </div>

        <div className={styles.total_locked}>
          <TotalLocked />
        </div>
        <div className={styles.total_supply_borrow}>
          <TotalSupplyBorrow />
        </div>
        <div className={styles.table_container}>
          <Tables />
        </div>
      </div>
    </PageLayout>
  );
};
export default Dashboard;
