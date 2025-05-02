import { ReactNode } from "react";
import styles from "./ScrollableContainer.module.scss";

interface ScrollableContainerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  padding?: number;
}

const ScrollableContainer = ({
  children,
  className = "",
  gap = 20,
  padding = 20,
}: ScrollableContainerProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={styles.scroll_container}
        style={{ gap: `${gap}px`, padding: `${padding}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableContainer;
