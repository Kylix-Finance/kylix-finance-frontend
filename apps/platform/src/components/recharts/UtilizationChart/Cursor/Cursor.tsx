import { CursorProps } from "~/types";
import styles from "./Cursor..module.scss";

export const Cursor = ({ points }: CursorProps) => {
  const x = points?.[0]?.x ?? 0;

  return (
    <>
      <line
        x1={x}
        y1={10}
        x2={x}
        y2="calc(100% - 62px)"
        className={styles.line}
      />

      <rect
        x={x}
        y={10}
        width="100%"
        height="calc(100% - 72px)"
        fill="rgba(0,0,0,0.2)"
        pointerEvents="none"
      />
    </>
  );
};
