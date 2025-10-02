import PageLayout from "~/layouts/page/PageLayout";
import styles from "./Portfolio.module.scss";
import { Suspense } from "react";
import Tables from "./tables/Tables";
import Ltv from "./ltv/Ltv";
import PortfolioValue from "./portfolio-value/PortfolioValue";
const Portfolio = () => {
  return (
    <PageLayout title="Portfolio">
      <div className={styles.container}>
        <div className={styles.total_portfolio_value}>
          <PortfolioValue />
        </div>
        <div className={styles.total_collateral_borrowed}>
          <p>Bye</p>
        </div>
        <div className={styles.ltv_container}>
          <Ltv />
        </div>
        <div className={styles.table_container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Tables />
          </Suspense>
        </div>
      </div>
    </PageLayout>
  );
};

export default Portfolio;
