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
}

const ChartContainer = ({
  title,
  value,
  onItemClick,
  tabs,
  children,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p>{title}</p>
          <p>{formatBigNumbers(value.bigNumStr, value.decimal)}</p>
        </div>
        <ButtonGroup tabs={tabs} onItemClick={onItemClick} />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default ChartContainer;
