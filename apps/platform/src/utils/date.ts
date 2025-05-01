import { format, fromUnixTime } from "date-fns";

export const getShortMonth = (unix: number) => {
  return format(fromUnixTime(unix), "MMM");
};
