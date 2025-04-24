import { cryptoCurrencies } from "~/assets/svgs/crypto-currencies";

interface Props {
  symbol: string;
  width?: number;
  height?: number;
}

export const TokenIcon = ({ symbol, height = 32, width = 32 }: Props) => {
  const lowerCaseSymbol = symbol.toLowerCase();
  const IconComponent =
    cryptoCurrencies[lowerCaseSymbol] || cryptoCurrencies["generic"];

  return (
    <IconComponent
      height={height}
      width={width}
      preserveAspectRatio="xMidYMid meet"
      style={{ flexShrink: 0 }}
    />
  );
};
