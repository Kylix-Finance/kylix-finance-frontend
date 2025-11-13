import PageLayout from "~/layouts/page/PageLayout";
import styles from "./Portfolio.module.scss";
import { Suspense } from "react";
import Tables from "./tables/Tables";
import Ltv from "./ltv/Ltv";
import PortfolioValue from "./portfolio-value/PortfolioValue";
import ProtectedLayout from "~/layouts/protected";
import TotalCollateralBorrowed from "./total-collateral-borrowed";
const Portfolio = () => {
  return (
    <PageLayout title="Portfolio">
      <ProtectedLayout>
        <div className={styles.container}>
          <div className={styles.total_portfolio_value}>
            <PortfolioValue />
          </div>
          <div className={styles.total_collateral_borrowed}>
            <TotalCollateralBorrowed />
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
      </ProtectedLayout>
    </PageLayout>
  );
};

export default Portfolio;
