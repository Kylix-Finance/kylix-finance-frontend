import { toast, ToastContentProps } from "react-toastify";
import { NotificationParams } from "~/types";
import styles from "./Content.module.scss";
import Sparkle from "~/assets/icons/sparkle.svg";
import CheckCircle from "~/assets/icons/check-circle.svg";
import Info from "~/assets/icons/info.svg";
import Attention from "~/assets/icons/attention.svg";
import Warning from "~/assets/icons/warning.svg";
import Close from "~/assets/icons/close.svg";
import clsx from "clsx";

interface Props extends ToastContentProps, NotificationParams {}

const iconSize = { width: 20, height: 20 };
const ICONS = {
  information: <Info {...iconSize} />,
  success: <CheckCircle {...iconSize} />,
  error: <Attention {...iconSize} />,
  warning: <Warning {...iconSize} />,
  message: <Sparkle {...iconSize} />,
};

const Container = ({ mode, message, title }: Props) => {
  const titleContainerClassName = clsx(styles.title_container, {
    [styles.type_information]: mode === "information",
    [styles.type_error]: mode === "error",
    [styles.type_message]: mode === "message",
    [styles.type_success]: mode === "success",
    [styles.type_warning]: mode === "warning",
  });
  const containerClassName = clsx(styles.container, {
    [styles.container_information]: mode === "information",
    [styles.container_error]: mode === "error",
    [styles.container_message]: mode === "message",
    [styles.container_success]: mode === "success",
    [styles.container_warning]: mode === "warning",
  });

  return (
    <div className={containerClassName}>
      <div className={styles.header}>
        <div className={titleContainerClassName}>
          {ICONS[mode]}
          <p>{title}</p>
        </div>
        <button className={styles.close_button} onClick={() => toast.dismiss()}>
          <Close {...iconSize} />
        </button>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Container;
