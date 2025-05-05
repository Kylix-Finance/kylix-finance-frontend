import { CursorProps } from "~/types";

export const Cursor = ({ points, width, height }: CursorProps) => {
  const x = points?.[0]?.x ?? 0;

  return (
    <rect
      x={x}
      y={0}
      width="100%"
      height="calc(100% - 30px)"
      fill="rgba(0,0,0,0.4)"
      pointerEvents="none"
    />
  );
};
