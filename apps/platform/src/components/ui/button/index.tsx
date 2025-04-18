import { ComponentPropsWithRef, ReactNode, ElementType } from "react";
import styles from "./index.module.scss";

import clsx from "clsx";
import Spinner from "~/components/loaders/spinner";
interface Props extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "default" | "large";
  isLoading?: boolean;
  icon?: ElementType;
  containerClassName?: string;
}

const Button = ({
  variant = "primary",
  size = "default",
  isLoading,
  icon: Icon,
  containerClassName,
  ...rest
}: Props) => {
  const className = clsx(styles.button, containerClassName, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.tertiary]: variant === "tertiary",
    [styles.small]: size === "small",
    [styles.default]: size === "default",
    [styles.large]: size === "large",
    [styles.loading]: isLoading,
  });
  const iconClassName = clsx({
    [styles.icon_small]: size === "small",
    [styles.icon_default]: size === "default",
    [styles.icon_large]: size === "large",
  });

  return (
    <button className={className} {...rest} data-loading={isLoading}>
      {Icon && (
        <span className={styles.icon}>
          {isLoading ? (
            <Spinner className={iconClassName} borderWidth={2} />
          ) : (
            <Icon className={iconClassName} />
          )}
        </span>
      )}
      <span
        className={clsx(
          { [styles.content_loading]: isLoading && !Icon },
          rest.className
        )}
      >
        {rest.children}
      </span>
      {!Icon && isLoading && (
        <span className={styles.loading_icon}>
          <Spinner width={25} height={25} borderWidth={2} />
        </span>
      )}
    </button>
  );
};

export default Button;
