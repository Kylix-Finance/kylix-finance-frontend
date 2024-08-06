"use client";
import { data } from "~/config/data";

interface Props {
  symbol: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
  className?: string;
}

const Icon = ({
  symbol,
  height = "32px",
  width = "32px",
  className,
}: Props) => {
  const IconComponent = data.coins[symbol];

  if (!IconComponent) {
    return;
  }

  return (
    <IconComponent
      height={height}
      width={width}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      viewBox="0 0 32 32"
    />
  );
};

export default Icon;
