"use client";

import { ModalProps } from "~/types";
import styles from "./Mobile.module.scss";
import { Drawer } from "vaul";
import Close from "~/assets/icons/close";
import clsx from "clsx";
const Mobile = ({
  children,
  isOpen,
  onClose,
  title,
  mobileClassName,
}: ModalProps) => {
  return (
    <Drawer.Root
      shouldScaleBackground
      open={isOpen}
      onClose={onClose}
      repositionInputs={false}
      modal
    >
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} onClick={onClose}>
          <Drawer.Content className={clsx(styles.content, mobileClassName)}>
            <div className={styles.handle} />
            {title && (
              <div className={styles.header}>
                <Drawer.Title className={styles.title}>{title}</Drawer.Title>
              </div>
            )}
            <div className={styles.children}>{children}</div>
          </Drawer.Content>
        </Drawer.Overlay>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Mobile;
