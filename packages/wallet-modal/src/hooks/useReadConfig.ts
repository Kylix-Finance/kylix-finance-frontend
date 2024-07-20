import { useQuery } from "@tanstack/react-query";
import { Config } from "../types";
import { baseKey } from "../constants";

export const configQueryKey = [baseKey, "config"];

export const useReadConfig = () => {
  return useQuery<Config>({
    queryKey: configQueryKey,
  });
};
