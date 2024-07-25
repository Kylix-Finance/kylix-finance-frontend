import { useEffect } from "react";
import { Options } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import React from "react";

interface Props {
  children: React.ReactNode;
  options: Options;
}

const Provider = ({ children, options }: Props) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!options) {
      throw new Error("options can not be empty!");
    }
    queryClient.setQueryData(queryKeys.options, options);
  }, [options]);
  return <>{children}</>;
};

export { Provider };
