export const hexToBigInt = (hex: string): bigint => {
  return BigInt(hex);
};
export const formatBalance = (
  balance: bigint,
  decimals: number = 18,
  unit: string = "DOT"
): string => {
  const divisor = BigInt(10 ** decimals);
  const wholePart = balance / divisor;
  const fractionalPart = balance % divisor;

  const fractionalStr = fractionalPart
    .toString()
    .padStart(decimals, "0")
    .slice(0, 4);

  return `${wholePart}.${fractionalStr} ${unit}`;
};
