import { format } from "date-fns";
import { ChartScale } from "~/types";

export const toIsoString = (date: Date) => {
  return format(date, "yyyy-MM-dd HH:mm:ss");
};

export const formatDateWithTime = (timestamp: number) => {
  return format(new Date(timestamp), "dd MMM, yyyy - HH:mm:ss");
};

const scaleMap = {
  "1m": "minute",
  "5m": "minute",
  "15m": "minute",
  "1h": "hour",
  "12h": "hour",
  "1d": "day",
} as const;

export const getTimeUnit = (scale: ChartScale) => {
  return scaleMap[scale];
};
