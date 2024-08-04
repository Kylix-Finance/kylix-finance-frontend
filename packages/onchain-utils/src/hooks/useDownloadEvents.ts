import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";

export const useDownloadEvents = () => {
  const { api } = useProvider();

  const enabled = !!api;
  return useQuery({
    queryKey: ["event-download"],
    queryFn: enabled
      ? async () => {
          // const lastHeader = await api?.rpc?.chain?.getHeader?.();

          // const events = await api?.query?.system?.events?.at?.(
          //   lastHeader?.hash || ""
          // );

          // console.log("eventseventseventsevents", events?.toHuman());
          // await api?.disconnect();

          // return events;
          return "commented";
        }
      : skipToken,
  });
};
