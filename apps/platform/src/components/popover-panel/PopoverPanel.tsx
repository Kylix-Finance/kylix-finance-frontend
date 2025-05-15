import React, { useRef } from "react";
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
  OpenChangeReason,
} from "@floating-ui/react";
import { AnimatePresence } from "framer-motion";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import { motion } from "motion/react";

interface PopoverPanelProps {
  target: React.ReactNode;
  panel: React.ReactNode;
  portalClassName?: string;
  onOpenChange: (
    open: boolean,
    event?: Event,
    reason?: OpenChangeReason
  ) => void;
  open: boolean;
}

export function PopoverPanel({
  target,
  panel,
  onOpenChange,
  open,
  portalClassName,
}: PopoverPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open,
    middleware: [offset(10), flip(), shift()],
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    onOpenChange,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {target}
      </div>
      <AnimatePresence>
        {open && (
          <FloatingPortal root={containerRef}>
            <motion.div
              {...framerProps}
              variants={fadeInOutAnimation}
              ref={refs.setFloating}
              style={{ ...floatingStyles, zIndex: 10 }}
              {...getFloatingProps()}
              className={portalClassName}
            >
              {panel}
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </div>
  );
}
