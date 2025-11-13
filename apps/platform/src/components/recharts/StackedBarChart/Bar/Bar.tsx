import { CSSProperties } from "react";
import { BarProps } from "recharts";
import styles from "./Bar.module.scss";
import { ChartItemIndex } from "~/types";

interface CustomBarProps extends BarProps {
  borderRadius?: CSSProperties["borderRadius"];
  gradient: string;
  borderColor: string;
  hoveredIndex: ChartItemIndex;
  setHoveredIndex: React.Dispatch<React.SetStateAction<ChartItemIndex>>;
}

export const Bar = ({
  x,
  y,
  width,
  height,
  index,
  hoveredIndex,
  setHoveredIndex,
  gradient,
  borderColor,
  borderRadius,
}: CustomBarProps) => {
  const isActive = hoveredIndex === null || hoveredIndex === index;

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        pointerEvents: "all",
        opacity: isActive ? 1 : 0.4,
        transition: "opacity 0.2s ease",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={styles.bar}
        style={{
          background: gradient,
          borderColor,
          borderRadius,
        }}
      />
    </foreignObject>
  );
};
