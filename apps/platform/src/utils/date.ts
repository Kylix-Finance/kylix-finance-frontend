import { format } from "date-fns";

export const getShortMonth = (date: Date): string => {
  return format(date, "MMM");
};
