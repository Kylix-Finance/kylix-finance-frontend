import { ElementType } from "react";
import styles from "./Status.module.scss";
import clsx from "clsx";

interface Props {
  content: string;
  variant?: "success" | "warning" | "info" | "gray" | "error";
  icon?: ElementType;
  borderRadius?: number;
  rounded?: boolean;
  size?: "default" | "small";
}

const Status = ({
  content,
  variant = "success",
  icon: Icon,
  borderRadius,
  rounded,
  size = "default",
}: Props) => {
  const className = clsx(styles.container, {
    [styles.success]: variant === "success",
    [styles.warning]: variant === "warning",
    [styles.info]: variant === "info",
    [styles.error]: variant === "error",
    [styles.gray]: variant === "gray",
    [styles.default]: size === "default",
    [styles.small]: size === "small",
  });
  return (
    <div
      className={className}
      style={{
        borderRadius: rounded ? 9999 : borderRadius ? borderRadius : 8,
      }}
    >
      <span>{content}</span>
      {Icon && (
        <span className={styles.icon}>
          <Icon />
        </span>
      )}
    </div>
  );
};

export default Status;
