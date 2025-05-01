import { ReactNode } from "react";
import Sidebar from "~/components/sidebar";
import styles from "./SidebarLayout.module.scss";
import Background from "~/components/background/Background";

interface Props {
  children: ReactNode;
}

export const SidebarLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Background />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
