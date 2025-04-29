import { useMemo } from "react";
import { downsample } from "~/utils/sampling";

export const useDownsample = <T>(data: T[], targetLength: number): T[] => {
  return useMemo(() => {
    return downsample(data, targetLength);
  }, [data, targetLength]);
};
