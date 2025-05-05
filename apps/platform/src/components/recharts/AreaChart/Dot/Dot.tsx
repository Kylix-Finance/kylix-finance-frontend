import { DotProps } from "recharts";
import styles from "./Dot.module.scss";

export const Dot = (props: DotProps) => {
  const { cx, cy } = props;
  if (cx == null || cy == null) return null;

  return (
    <svg x={0} y={0} width="100%" height="100%">
      <line x1="0" y1={cy} x2="100%" y2={cy} className={styles.line} />

      <line x1={cx} y1="0" x2={cx} y2="100%" className={styles.line} />

      <g transform={`translate(${cx - 8}, ${cy - 8})`}>
        <path
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          className={styles.circle}
        />
        <path
          d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z"
          className={styles.dot}
        />
      </g>
    </svg>
  );
};
