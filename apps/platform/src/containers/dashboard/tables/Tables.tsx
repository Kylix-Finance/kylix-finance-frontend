import MarketTable from "../market-table";
import LiquidationTable from "../liquidation-table";
import styles from "./Tables.module.scss";
import { ButtonGroup } from "~/components/ui/button-group";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import TableLayout from "~/components/table-layout";
import { Input } from "~/components/ui/input";
import Search from "~/assets/icons/search.svg";
import { useQueryState } from "nuqs";
type Tab = "markets" | "liquidations";

export const Tables = () => {
  const [activeTab, setActiveTab] = useState<Tab>("markets");
  const [q, setQ] = useQueryState("q", {
    throttleMs: 200,
  });
  return (
    <TableLayout
      header={
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
              setActiveTab={(value) => {
                setActiveTab(value);
                setQ(null);
              }}
            />
          </div>
          <div
            style={{
              width: 300,
            }}
          >
            <Input
              icon={Search}
              placeholder="Search by name"
              onChange={(e) => setQ(e.target.value)}
              value={q || ""}
            />
          </div>
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {activeTab === "markets" && (
          <motion.div
            key="markets"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <MarketTable query={q} />
          </motion.div>
        )}

        {activeTab === "liquidations" && (
          <motion.div
            key="liquidations"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <LiquidationTable query={q} />
          </motion.div>
        )}
      </AnimatePresence>
    </TableLayout>
  );
};
