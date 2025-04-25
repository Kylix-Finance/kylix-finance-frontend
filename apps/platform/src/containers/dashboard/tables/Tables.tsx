import MarketTable from "../market-table";
import LiquidationTable from "../liquidation-table";
import styles from "./Tables.module.scss";
import { ButtonGroup } from "~/components/ui/button-group";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";

type Tab = "markets" | "liquidations";

export const Tables = () => {
  const [activeTab, setActiveTab] = useState<Tab>("markets");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.switcher}>
          <ButtonGroup
            tabs={[
              {
                value: "markets" as const,
                content: "Markets",
              },
              {
                value: "liquidations" as const,
                content: "Liquidations",
              },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "markets" && (
          <motion.div
            key="markets"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <MarketTable />
          </motion.div>
        )}

        {activeTab === "liquidations" && (
          <motion.div
            key="liquidations"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <LiquidationTable />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
