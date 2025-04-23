import { ButtonGroupTab } from "~/types";
import { ButtonGroup } from "../ui/button-group";
import styles from "./ChartContainer.module.scss";
import { ReactNode } from "react";
import { formatBigNumbers } from "@repo/onchain";
interface Props {
  title: string;
  value: {
    bigNumStr: string;
    decimal: number;
  };
  onItemClick: (value: ButtonGroupTab) => void;
  tabs: ButtonGroupTab[];
  children: ReactNode;
  defaultTab: string;
}

const ChartContainer = ({
  title,
  value,
  onItemClick,
  tabs,
  children,
  defaultTab,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <p className={styles.heading_title}>{title}</p>
          <p className={styles.heading_value}>
            {formatBigNumbers(value.bigNumStr, value.decimal)}
          </p>
        </div>
        <ButtonGroup
          tabs={tabs}
          onItemClick={onItemClick}
          defaultTab={defaultTab}
        />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default ChartContainer;
