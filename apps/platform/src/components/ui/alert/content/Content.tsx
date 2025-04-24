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
import { useEffect, useRef, useState } from "react";

interface Props extends ToastContentProps, NotificationParams {}

const iconSize = { width: 20, height: 20 };
const ICONS = {
  information: <Info {...iconSize} />,
  success: <CheckCircle {...iconSize} />,
  error: <Attention {...iconSize} />,
  warning: <Warning {...iconSize} />,
  message: <Sparkle {...iconSize} />,
};

const TOAST_DURATION = 5000;

const Container = ({ mode, message, title, isPaused }: Props) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeProgressBar = () => {
    if (!progressRef.current) return;
    progressRef.current.style.width = "100%";
    progressRef.current.style.transition = `width ${TOAST_DURATION}ms linear`;

    setTimeout(() => {
      if (progressRef.current && !isPaused) {
        progressRef.current.style.width = "0%";
      }
    }, 10);
  };

  const pauseProgressBar = () => {
    if (!progressRef.current) return;
    const computedStyle = window.getComputedStyle(progressRef.current);
    const currentWidth = computedStyle.width;

    progressRef.current.style.transition = "none";
    void progressRef.current.offsetWidth;
    progressRef.current.style.width = currentWidth;
  };

  const resumeProgressBar = () => {
    if (!progressRef.current) return;
    const computedStyle = window.getComputedStyle(progressRef.current);
    const currentWidth = computedStyle.width;
    const fullWidth = progressRef.current.parentElement?.offsetWidth || 100;
    const widthPercentage = parseFloat(currentWidth) / fullWidth;
    const remainingTime = TOAST_DURATION * widthPercentage;

    progressRef.current.style.transition = `width ${remainingTime}ms linear`;
    void progressRef.current.offsetWidth;
    progressRef.current.style.width = "0%";
  };

  const updateProgressBar = () => {
    if (!isInitialized) {
      initializeProgressBar();
      setIsInitialized(true);
    } else if (isPaused) {
      pauseProgressBar();
    } else {
      resumeProgressBar();
    }
  };

  useEffect(() => {
    updateProgressBar();
  }, [isPaused, isInitialized]);

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
  const progressClassName = clsx(styles.progress_bar, {
    [styles.progress_information]: mode === "information",
    [styles.progress_error]: mode === "error",
    [styles.progress_message]: mode === "message",
    [styles.progress_success]: mode === "success",
    [styles.progress_warning]: mode === "warning",
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

      <div className={styles.progress_container}>
        <div ref={progressRef} className={progressClassName} />
      </div>
    </div>
  );
};

export default Container;
