"use client";

import { Box } from "@mui/material";
import { ReactNode, useEffect, useRef, useCallback } from "react";
import { cn } from "~/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const ScrollableArea = ({ children, className }: Props) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    const scrollbar = scrollbarRef.current;
    const thumb = scrollbarThumbRef.current;
    if (!scrollbar || !thumb) return;
    const scrollTop = scrollbar.scrollTop;
    const scrollHeight = scrollbar.scrollHeight;
    const clientHeight = scrollbar.clientHeight;
    const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
    const thumbTop = (scrollTop / scrollHeight) * clientHeight;
    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${thumbTop}px)`;
  }, []);
  useEffect(() => {
    const scrollbar = scrollbarRef.current;
    if (!scrollbar) return;
    scrollbar.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      scrollbar.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Box
      className={cn("w-full h-full scrollbar", className)}
      ref={scrollbarRef}
    >
      <Box ref={scrollbarThumbRef} className="scrollbar-thumb" />
      {children}
    </Box>
  );
};
