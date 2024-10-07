import { format } from "date-fns";

export const toIsoString = (date: Date) => {
  return format(date, "yyyy-MM-dd HH:mm:ss");
};
