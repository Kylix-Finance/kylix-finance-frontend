import ActionHeader from "./action-header/ActionHeader";
import styles from "./Liquidation.module.scss";
const Liquidation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ActionHeader data={[]} symbol={["ETH", "BTC"]} />
      </div>
      <div className={styles.chart}>chart</div>
      <div className={styles.table}>table</div>
      <div className={styles.form}>form</div>
    </div>
  );
};

export default Liquidation;
