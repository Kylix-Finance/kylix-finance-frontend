import { ComponentPropsWithRef, ElementType } from "react";
import styles from "./IconButton.module.scss";
import clsx from "clsx";
interface Props extends Omit<ComponentPropsWithRef<"button">, "children"> {
  mode?: "fill" | "none";
  icon: ElementType;
  width?: number;
  height?: number;
  noPadding?: boolean;
  noInteractionStyles?: boolean;
}

const IconButton = ({
  mode = "fill",
  icon: Icon,
  className: containerClassName,
  width = 24,
  height = 24,
  noInteractionStyles = false,
  noPadding,
  ...rest
}: Props) => {
  const className = clsx(styles.container, containerClassName, {
    [styles.fill]: mode === "fill",
    [styles.none]: mode === "none",
    [styles.no_padding]: noPadding,
  });
  return (
    <button
      className={className}
      data-mode={mode}
      {...rest}
      data-no-interaction-styles={noInteractionStyles}
    >
      <Icon width={width} height={height} />
    </button>
  );
};

export default IconButton;
