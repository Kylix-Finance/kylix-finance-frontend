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
    prefix?: string;
  };
  onItemClick: (value: string | number) => void;
  tabs: ButtonGroupTab[];
  children: ReactNode;
  activeTab: string;
  hideChildrenOnMobile?: boolean;
  hideContainerStyle?: boolean;
}
const ChartContainer = ({
  title,
  value,
  onItemClick,
  tabs,
  children,
  activeTab,
  hideChildrenOnMobile = true,
  hideContainerStyle = true,
}: Props) => {
  return (
    <div
      className={styles.container}
      data-hide-container-style={hideContainerStyle}
    >
      <div className={styles.header}>
        <div className={styles.heading}>
          <p
            className={styles.heading_title}
            data-hide-container-style={hideContainerStyle}
          >
            {title}
          </p>
          <p className={styles.heading_value}>
            {value.prefix}
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
      <div
        className={styles.children}
        data-hide-on-mobile={hideChildrenOnMobile}
      >
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
