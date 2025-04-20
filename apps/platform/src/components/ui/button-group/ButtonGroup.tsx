import { useId, useState } from "react";
import styles from "./ButtonGroup.module.scss";
import { motion } from "motion/react";
import clsx from "clsx";
import { ButtonGroupTab } from "~/types";

interface Props<T> {
  tabs: ButtonGroupTab<T>[];
  fullWidth?: boolean;
  defaultTab?: T;
  onItemClick?: (value: T) => void;
}

function ButtonGroup<T>({
  tabs,
  defaultTab,
  fullWidth,
  onItemClick,
}: Props<T>) {
  const [activeTab, setActiveTab] = useState<T | undefined>(defaultTab);
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
            onItemClick?.(item.value);
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
