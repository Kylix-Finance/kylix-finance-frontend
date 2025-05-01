import { Variants } from "motion/react";
export const framerProps = {
  initial: "hidden",
  animate: "visible",
  exit: "out",
};
export const fadeAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInOutAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  out: { opacity: 0 },
};
export const collapsableFadeInOutVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  out: { height: 0, opacity: 0 },
};
