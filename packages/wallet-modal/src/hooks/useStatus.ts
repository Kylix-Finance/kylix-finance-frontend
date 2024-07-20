import { useQuery } from "@tanstack/react-query";
import { Status } from "../types";
import { baseKey } from "../constants";

export const statusQueryKey = [baseKey, "status"];

export const useStatus = () => {
  return useQuery<Status>({
    queryKey: statusQueryKey,
  });
};
