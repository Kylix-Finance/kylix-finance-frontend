export * from "./store";
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const hexPattern = /^#([0-9A-F]{3}){1,2}$/i;
  if (!hexPattern.test(hex)) {
    throw new Error(`Please use valid hex code, ${hex}`);
  }

  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = Array.from(hex).reduce((str, x) => str + x + x, "");
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};
