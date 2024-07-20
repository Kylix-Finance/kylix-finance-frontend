import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { baseKey } from "../constants";
import { Config } from "../types";

interface Props {
  children: React.ReactNode;
  // queryClient: QueryClient;
  config: Config;
}

const Providers = ({ children, config }: Props) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.setQueryData([baseKey, "config"], () => {
      if (config.dappName === "") {
        throw new Error("dappName van not be empty!");
      }
      return config;
    });
  }, [config]);
  return <>{children}</>;
};
export default Providers;
