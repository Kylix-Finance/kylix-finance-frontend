import { useId } from "react";
import styles from "./ButtonGroup.module.scss";
import { motion } from "motion/react";
import clsx from "clsx";
import { ButtonGroupTab } from "~/types";

interface Props<T extends ButtonGroupTab> {
  tabs: T[] | readonly T[];
  fullWidth?: boolean;
  activeTab: T["value"];
  setActiveTab: (value: T["value"]) => void;
}

function ButtonGroup<T extends ButtonGroupTab>({
  tabs,
  activeTab,
  setActiveTab,
  fullWidth,
}: Props<T>) {
  const id = useId();
  return (
    <div
      style={{
        width: fullWidth ? "100%" : undefined,
      }}
      className={styles.container}
    >
      {tabs.map((item, index) => (
        <button
          className={clsx(styles.button, {
            [styles.button_active]: activeTab === item.value,
          })}
          key={index}
          onClick={() => {
            setActiveTab(item.value);
          }}
        >
          {item.content}
          {activeTab === item.value && (
            <motion.div
              layout
              layoutId={`button-group-${id}`}
              className={styles.button_active_bg}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
