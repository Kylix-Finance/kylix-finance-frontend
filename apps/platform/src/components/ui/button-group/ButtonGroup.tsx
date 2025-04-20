import { Dispatch, ReactNode, SetStateAction, useId } from "react";
import styles from "./ButtonGroup.module.scss";
import { motion } from "motion/react";
import clsx from "clsx";

interface Props {
  tabs: ReactNode[];
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
  fullWidth?: boolean;
}

const ButtonGroup = ({ tabs, setTab, tab, fullWidth }: Props) => {
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
            [styles.button_active]: tab === index,
          })}
          key={index}
          onClick={() => setTab(index)}
        >
          {item}
          {tab === index && (
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
};

export default ButtonGroup;
