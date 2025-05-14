"use client";
import { ButtonGroup } from "~/components/ui/button-group";
import { useQueryState } from "nuqs";
import Supply from "./supply/Supply";
import Borrow from "./borrow/Borrow";
import Withdraw from "./withdraw/Withdraw";
import Repay from "./repay/Repay";
import { AnimatePresence, motion } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import { TransactionFormProps } from "~/types";
import CardWrapper from "~/components/card-wrapper";

const tabs = [
  { value: "supply" as const, content: "Supply", Component: Supply },
  { value: "borrow" as const, content: "Borrow", Component: Borrow },
  { value: "withdraw" as const, content: "Withdraw", Component: Withdraw },
  { value: "repay" as const, content: "Repay", Component: Repay },
] as const;

type TabValue = (typeof tabs)[number]["value"];

const TransactionForm = (props: TransactionFormProps) => {
  const [activeTab, setActiveTab] = useQueryState<TabValue>("tab", {
    clearOnDefault: true,
    defaultValue: tabs[0].value,
    parse: (value) => value as TabValue,
  });

  const activeTabData = tabs.find((tab) => tab.value === activeTab);

  return (
    <CardWrapper>
      <ButtonGroup
        tabs={tabs}
        activeTab={activeTab}
        fullWidth
        setActiveTab={setActiveTab}
      />
      <AnimatePresence mode="wait">
        {activeTabData && (
          <motion.div
            key={activeTabData.value}
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <activeTabData.Component {...props} />
          </motion.div>
        )}
      </AnimatePresence>
    </CardWrapper>
  );
};

export default TransactionForm;
