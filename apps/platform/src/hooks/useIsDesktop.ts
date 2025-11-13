"use client";
import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";

export const useIsDesktop = () => {
  const { width } = useViewportSize();
  return width >= BREAKPOINTS.DESKTOP;
};
