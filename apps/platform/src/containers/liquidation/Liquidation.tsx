import ActionHeader from "./action-header/ActionHeader";
import styles from "./Liquidation.module.scss";
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
      <div className={styles.chart}>chart</div>
      <div className={styles.table}>table</div>
      <div className={styles.form}>form</div>
    </div>
  );
};

export default Liquidation;
