"use client";

import { ModalProps } from "~/types";
import styles from "./Desktop.module.scss";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { fadeAnimation, framerProps } from "~/animations/variants";
import Close from "~/assets/icons/close.svg";
import { IconButton } from "../../icon-button";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
const Desktop = ({
  children,
  isOpen,
  onClose,
  closeOnClickOutside = true,
  desktopClassName,
  hasCloseButton,
  title,
  onBackButtonClick,
  footer,
}: ModalProps) => {
  const ref = useRef<any>(null);

  useOnClickOutside(ref, () => {
    if (closeOnClickOutside && onClose) {
      onClose();
    }
  });

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          {...framerProps}
          variants={fadeAnimation}
          transition={{
            duration: 0.12,
            ease: "easeInOut",
          }}
          className={styles.overly}
        >
          <div ref={ref} className={clsx(styles.container, desktopClassName)}>
            {(title || hasCloseButton) && (
              <div className={styles.header}>
                <div className={styles.left}>
                  {onBackButtonClick && (
                    <IconButton
                      icon={ArrowLeft}
                      mode="none"
                      noPadding
                      onClick={onBackButtonClick}
                    />
                  )}
                  {title && <p className={styles.title}>{title}</p>}
                </div>
                {hasCloseButton && (
                  <button className={styles.close_button} onClick={onClose}>
                    <Close width={20} height={20} />
                  </button>
                )}
              </div>
            )}
            {children}
            {footer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Desktop;
