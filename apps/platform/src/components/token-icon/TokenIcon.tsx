import { cryptoCurrencies } from "~/assets/svgs/crypto-currencies";
import { TokenIconProps } from "~/types";

export const TokenIcon = ({
  symbol,
  height = 32,
  width = 32,
  className,
}: TokenIconProps) => {
  const lowerCaseSymbol = symbol.toLowerCase();
  const IconComponent =
    cryptoCurrencies[lowerCaseSymbol] || cryptoCurrencies["generic"];

  return (
    <IconComponent
      className={className}
      height={height}
      width={width}
      preserveAspectRatio="xMidYMid meet"
      style={{ flexShrink: 0 }}
    />
  );
};
