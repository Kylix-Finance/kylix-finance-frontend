import { DotProps as RechartDotProps } from "recharts";
import styles from "./Dot.module.scss";

interface DotProps extends RechartDotProps {
  index?: number;
  length: number;
  isActiveDot?: boolean;
}

export const Dot = ({
  cx,
  cy,
  fill,
  index,
  length,
  isActiveDot = false,
  stroke,
}: DotProps) => {
  if (cx == null || cy == null || (!isActiveDot && index !== length - 1))
    return null;

  const color = isActiveDot ? fill : stroke;

  return (
    <g transform={`translate(${cx - 8}, ${cy - 8})`}>
      <path
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        className={styles.circle}
        fill={color}
      />
      <path
        d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z"
        className={styles.dot}
        fill={color}
      />
    </g>
  );
};
