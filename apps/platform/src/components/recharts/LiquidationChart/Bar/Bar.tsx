import { BarProps } from "recharts";
import styles from "./Bar.module.scss";
import { ChartItemIndex } from "~/types";

interface CustomBarProps extends BarProps {
  borderColor: string;
  hoveredIndex: ChartItemIndex;
  setHoveredIndex: React.Dispatch<React.SetStateAction<ChartItemIndex>>;
  gradientId: string;
}

export const Bar = ({
  x,
  y,
  width,
  height,
  index,
  hoveredIndex,
  setHoveredIndex,
  borderColor,
  gradientId,
}: CustomBarProps) => {
  const isActive = hoveredIndex === null || hoveredIndex === index;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  const absHeight = Math.abs(height);
  const isReversed = height < 0;
  const rectY = isReversed ? +y + height : +y;

  return (
    <g
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      opacity={isActive ? 1 : 0.4}
      className={styles.bar}
    >
      {/* 1. Main gradient fill */}
      <rect
        x={x}
        y={rectY}
        width={width}
        height={absHeight}
        fill={`url(#${gradientId})`}
        opacity={0.6}
      />

      {/* 2. Border: Top or Bottom based on direction */}
      <rect
        x={x}
        y={isReversed ? rectY + absHeight - 3 : rectY}
        width={width}
        height={3}
        fill={borderColor}
      />

      {/* 3. Left border */}
      <rect x={x} y={rectY} width={1} height={absHeight} fill={borderColor} />

      {/* 4. Right border */}
      <rect
        x={+x + width - 1}
        y={rectY}
        width={1}
        height={absHeight}
        fill={borderColor}
      />
    </g>
  );
};
