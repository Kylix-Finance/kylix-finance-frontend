/**
 * Converts a Uint format string to a human-readable number or string.
 *
 * @param value - The value in Uint format to be converted, as a string.
 * @param decimals - The number of decimals to consider for the conversion.
 * @returns The human-readable representation of the value as a string.
 */
export function formatUnit(
  value: string | number | bigint,
  decimals: number = 18
): string {
  let valueStr: string = value.toString();
  if (valueStr.length <= decimals) {
    valueStr = valueStr.padStart(decimals + 1, "0");
  }

  let wholePart: string = valueStr.slice(0, valueStr.length - decimals);
  let fractionalPart: string = valueStr
    .slice(valueStr.length - decimals)
    .replace(/0+$/, "");
  if (fractionalPart === "") {
    return wholePart;
  }
  return `${wholePart}.${fractionalPart}`;
}
