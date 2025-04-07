import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { queryKeys } from "@repo/shared";
import { Config } from "src/types";

interface Props {
  children: React.ReactNode;
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
  return <>{children}</>;
};
