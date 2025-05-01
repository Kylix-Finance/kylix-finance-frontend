"use client";
import { useLockScroll } from "~/hooks/useLockScroll";
import { ModalProps } from "~/types";
import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import { Portal } from "~/components/portal";
import Mobile from "./mobile/Mobile";
import { Desktop } from "./desktop";
const Modal = ({
  isOpen,
  onClose,
  isPortal = true,
  hasCloseButton = true,
  ...rest
}: ModalProps) => {
  const { width } = useViewportSize();
  const isMobile = width <= BREAKPOINTS.MOBILE;
  useLockScroll({ isLocked: isOpen, onClose });
  const modal = (
    <>
      {isMobile ? (
        <Mobile
          isOpen={isOpen}
          onClose={onClose}
          isPortal={true}
          hasCloseButton={hasCloseButton}
          {...rest}
        />
      ) : (
        <Desktop
          isOpen={isOpen}
          onClose={onClose}
          isPortal={true}
          hasCloseButton={hasCloseButton}
          {...rest}
        />
      )}
    </>
  );
  if (isPortal) {
    return <Portal id="modal">{modal}</Portal>;
  }
  return modal;
};

export default Modal;
