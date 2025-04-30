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
  onItemClick: (value: string | number) => void;
  tabs: ButtonGroupTab[];
  children: ReactNode;
  activeTab: string;
}
const ChartContainer = ({
  title,
  value,
  onItemClick,
  tabs,
  children,
  activeTab,
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
        <div className={styles.tabs_container}>
          <ButtonGroup
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={onItemClick}
          />
        </div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default ChartContainer;
