import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function calculateBottom(h: number): number {
  const rh = 600;
  if (h < 600) return 0;
  if (h >= 600 && h < 650) return 50 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 650 && h < 700) return 52 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 700 && h < 750) return 50 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 750 && h < 800) return 50 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 800 && h < 850) return 48 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 850 && h < 875) return 46 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 875 && h < 900) return 45 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 900 && h < 925) return 44 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 925 && h < 950) return 43 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 950 && h < 975) return 42 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 975 && h < 1000) return 41 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1000 && h < 1025) return 39.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1025 && h < 1050) return 38.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1050 && h < 1075) return 37.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1075 && h < 1100) return 36.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1100 && h < 1125) return 35.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1125 && h < 1150) return 34.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1150 && h < 1175) return 33.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1175 && h < 1200) return 32.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1200 && h < 1225) return 31.4 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1225 && h < 1250) return 30.4 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1250 && h < 1275) return 29.6 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1275 && h < 1300) return 28.8 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1300 && h < 1325) return 28.1 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1325 && h < 1350) return 27.3 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1350 && h < 1375) return 26.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1375 && h < 1400) return 25.8 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1400 && h < 1425) return 25.1 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1425 && h < 1450) return 24.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1450 && h < 1475) return 23.8 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1475 && h < 1500) return 23.2 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1500 && h < 1525) return 22.6 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1525 && h < 1550) return 22.1 * (Math.pow(h, 3) / Math.pow(rh, 3));
  return -1;
}
