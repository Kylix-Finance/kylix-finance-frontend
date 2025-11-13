import { PropsWithChildren } from "react";
import styles from "./TableLayout.module.scss";

interface TableLayoutProps extends PropsWithChildren {
  header: React.ReactNode;
}

export const TableLayout = ({ header, children }: TableLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>{header}</div>
      {children}
    </div>
  );
};
