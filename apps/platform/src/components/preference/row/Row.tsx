import { ReactNode } from "react";
import styles from "./Row.module.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const Row = ({ children, title }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default Row;
