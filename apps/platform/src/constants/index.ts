export const PASSWORD_PROTECTION_COOKIE_NAME = "_kylix_jwt";
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1024,
} as const;
//FIXME: 1d is temporary
export const CHART_SCALES = ["all", "month", "year", "1d"] as const;

export const TOTAL_BLOCKS_IN_YEAR = (365 * 24 * 60 * 60) / 6;
