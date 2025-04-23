import React, { useState } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useInteractions,
  FloatingPortal,
  autoUpdate,
} from "@floating-ui/react";
import { AnimatePresence } from "framer-motion";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import { motion } from "motion/react";

interface PopoverPanelProps {
  target: React.ReactNode;
  panel: React.ReactNode;
}

export function PopoverPanel({ target, panel }: PopoverPanelProps) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip(), shift()],
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {target}
      </div>
      <AnimatePresence>
        {open && (
          <FloatingPortal>
            <motion.div
              {...framerProps}
              variants={fadeInOutAnimation}
              ref={refs.setFloating}
              style={{ ...floatingStyles, zIndex: 10 }}
              {...getFloatingProps()}
            >
              {panel}
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </>
  );
}
