import styles from "./PortfolioValue.module.scss";

const PortfolioValue = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <p className={styles.heading}>Total Portfolio Value</p>
        <p className={styles.value}>$1,909.72</p>
        <p className={styles.heading_description}>
          Net Earn APR
          <span className={styles.apr_value}>12.3%</span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioValue;
