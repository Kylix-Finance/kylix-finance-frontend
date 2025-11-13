import { format, fromUnixTime } from "date-fns";

export const getShortMonth = (unix: number) => {
  return format(fromUnixTime(unix), "MMM");
};

export const formatTimestamp = (unix: number) => {
  const date = new Date(unix);
  return {
    time: format(date, "HH:mm:ss"),
    date: format(date, "dd/MM/yyyy"),
  };
};
