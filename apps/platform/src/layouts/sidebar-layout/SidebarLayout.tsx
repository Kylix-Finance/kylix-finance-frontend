import { ReactNode } from "react";
import Sidebar from "~/components/sidebar";
import styles from "./SidebarLayout.module.scss";

interface Props {
  children: ReactNode;
}

export const SidebarLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Sidebar />

      {/* <Background /> */}

      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
};
