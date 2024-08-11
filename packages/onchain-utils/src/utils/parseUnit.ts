/**
 * Converts a human-readable number or string to a Uint format string.
 *
 * @param value - The value to be converted, as a string or number.
 * @param decimals - The number of decimals to consider for the conversion.
 * @returns The value in bigint format.
 */
export function parseUnit(
  value: string | number,
  decimals: number = 18
): bigint {
  const valueStr: string = value.toString();
  let [wholePart, fractionalPart = ""] = valueStr.split(".");
  fractionalPart = fractionalPart.padEnd(decimals, "0").slice(0, decimals);
  let combined = `${wholePart}${fractionalPart}`.replace(/^0+/, "");
  return combined === "" ? BigInt("0") : BigInt(combined);
}
