"use client";
import { ButtonGroup } from "~/components/ui/button-group";
import styles from "./TransactionForm.module.scss";
import { useQueryState } from "nuqs";
import Supply from "./supply/Supply";
import Borrow from "./borrow/Borrow";
import Withdraw from "./withdraw/Withdraw";
import Repay from "./repay/Repay";
import { AnimatePresence, motion } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
const tabs = [
  { value: "supply" as const, content: "Supply" },
  { value: "borrow" as const, content: "Borrow" },
  { value: "withdraw" as const, content: "Withdraw" },
  { value: "repay" as const, content: "Repay" },
];

type TabValue = (typeof tabs)[number]["value"];

const TransactionForm = () => {
  const [activeTab, setActiveTab] = useQueryState<TabValue>("tab", {
    clearOnDefault: true,
    defaultValue: tabs[0].value,
    parse: (value) => value as TabValue,
  });

  return (
    <div className={styles.container}>
      <ButtonGroup
        tabs={tabs}
        activeTab={activeTab}
        fullWidth
        setActiveTab={setActiveTab}
      />
      <AnimatePresence mode="wait">
        {activeTab === "supply" && (
          <motion.div
            key="supply"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Supply />
          </motion.div>
        )}
        {activeTab === "borrow" && (
          <motion.div
            key="borrow"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Borrow />
          </motion.div>
        )}
        {activeTab === "withdraw" && (
          <motion.div
            key="withdraw"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Withdraw />
          </motion.div>
        )}
        {activeTab === "repay" && (
          <motion.div
            key="repay"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Repay />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransactionForm;
