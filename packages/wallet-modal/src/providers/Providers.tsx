import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Config } from "../types";
import { queryKeys } from "@repo/shared";

interface Props {
  children: React.ReactNode;
  // queryClient: QueryClient;
  config: Config;
}

export const Providers = ({ children, config }: Props) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!config.dappName) {
      throw new Error("dappName van not be empty!");
    }
    queryClient.setQueryData(queryKeys.config, config);
  }, [config]);
  return children;
};
