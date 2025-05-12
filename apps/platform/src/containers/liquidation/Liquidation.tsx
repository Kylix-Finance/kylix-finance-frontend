import LiquidationChart from "~/components/recharts/LiquidationChart";
import ActionHeader from "./action-header/ActionHeader";
import styles from "./Liquidation.module.scss";
import Table from "./table/Table";
const Liquidation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ActionHeader
          data={[
            { content: "Total value locked", value: "$22.59K" },
            {
              content: "Pool size",
              value: "$22,598",
            },
            {
              content: "Max discount",
              value: "30%",
            },
            {
              content: "Average price",
              value: "0.00930 BTC",
            },
          ]}
          symbol={["ETH", "BTC"]}
        />
      </div>
      <div className={styles.chart}>
        <LiquidationChart />
      </div>
      <div className={styles.table}>
        <Table />
      </div>
      <div className={styles.form}>form</div>
    </div>
  );
};

export default Liquidation;
