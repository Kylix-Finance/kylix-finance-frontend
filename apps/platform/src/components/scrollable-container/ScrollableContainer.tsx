import { ReactNode } from "react";
import styles from "./ScrollableContainer.module.scss";
import clsx from "clsx";

interface ScrollableContainerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  padding?: number;
}

export const ScrollableContainer = ({
  children,
  className,
  gap,
  padding,
}: ScrollableContainerProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={styles.scroll_container}
        style={{ gap: `${gap}px`, padding: `${padding}px` }}
      >
        {children}
      </div>
    </div>
  );
};
