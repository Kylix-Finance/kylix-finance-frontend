"use client";
import { ButtonGroup } from "~/components/ui/button-group";
import styles from "./Table.module.scss";
import { useQueryState } from "nuqs";
import { ButtonGroupTab } from "~/types";
import TableLayout from "~/components/table-layout";
import { AnimatePresence, motion } from "motion/react";
import Recent from "./recent/Recent";
import YourBids from "./your-bids/YourBids";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";

type LiquidationTabType = "recent" | "bids";
const tabs: ButtonGroupTab[] = [
  {
    content: "Recent",
    value: "recent",
  },
  {
    content: "Your Bids",
    value: "bids",
  },
];

const Table = () => {
  const [activeTab, setActiveTab] = useQueryState<LiquidationTabType>("tab", {
    clearOnDefault: true,
    defaultValue: "recent" as LiquidationTabType,
    parse: (value) => {
      return value === "recent" || value === "bids"
        ? (value as LiquidationTabType)
        : ("recent" as LiquidationTabType);
    },
  });

  return (
    <TableLayout
      header={
        <div className={styles.header}>
          <div className={styles.tabs}>
            <ButtonGroup
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={(value) => {
                setActiveTab(value as LiquidationTabType);
              }}
            />
          </div>
          <p className={styles.description}>
            Recent liquidations of BTC tokens with USDC payments and price
            fluctuations.
          </p>
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {activeTab === "recent" && (
          <motion.div
            key="recent"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Recent />
          </motion.div>
        )}
        {activeTab === "bids" && (
          <motion.div key="bids" {...framerProps} variants={fadeInOutAnimation}>
            <YourBids />
          </motion.div>
        )}
      </AnimatePresence>
    </TableLayout>
  );
};

export default Table;
