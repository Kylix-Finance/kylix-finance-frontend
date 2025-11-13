import { useEffect } from "react";
import { VoidFunction } from "~/types";

type UseLockScroll = {
  isLocked: boolean;
  onClose?: VoidFunction;
};

export const useLockScroll = ({ isLocked, onClose }: UseLockScroll) => {
  useEffect(() => {
    if (!isLocked) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.marginRight = scrollbarWidth + "px";
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.marginRight = "0px";
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked, onClose]);
};
