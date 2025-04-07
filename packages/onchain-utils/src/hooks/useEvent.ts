import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";

export const useEvent = () => {
  const { api } = useProvider();
  const enabled = !!api;
  return useQuery({
    queryKey: ["event:useEvent"],
    queryFn: enabled
      ? async () => {
          api?.query?.system?.events?.((events: any) => {
            console.log(`\nReceived ${events.length} events:`);

            // Loop through the Vec<EventRecord>
            events.forEach((record: any) => {
              // Extract the phase, event and the event types
              const { event } = record;
              // const types = event.typeDef;

              if (event.section === "balances") {
                console.log(
                  "record:::",
                  event.data.toJSON(),
                  event.data.toHuman(),
                  event.data
                );
              }
              // Show what we are busy with
              // console.log(
              //   `\t${event.section}:${event.method}:: (phase=${phase.toString()})`
              // );
              // console.log(`\t\t${event.meta.documentation.toString()}`);

              // Loop through each of the parameters, displaying the type and data
              // event.data.forEach((data: any, index: number) => {
              //   console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
              // });
            });
          });
        }
      : skipToken,
  });
};
