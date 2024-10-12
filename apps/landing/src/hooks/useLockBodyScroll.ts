import { useEffect } from "react";

type UseLockBodyScroll = {
  isLocked: boolean;
};

export const useLockBodyScroll = ({ isLocked }: UseLockBodyScroll) => {
  useEffect(() => {
    if (!isLocked) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.marginRight = scrollbarWidth + "px";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.marginRight = "0px";
      document.body.style.overflow = "visible";
    };
  }, [isLocked]);
};
