import { ComponentPropsWithRef, ElementType } from "react";
import DiscordIcon from "~/assets/icons/discord";
import styles from "./index.module.scss";
import clsx from "clsx";
interface Props extends Omit<ComponentPropsWithRef<"button">, "children"> {
  mode?: "fill" | "none";
  icon: ElementType;
}

const IconButton = ({ mode = "fill", icon: Icon, ...rest }: Props) => {
  const className = clsx(styles.container, {
    [styles.fill]: mode === "fill",
    [styles.none]: mode === "none",
  });
  return (
    <button className={className} data-mode={mode} {...rest}>
      <Icon width={24} height={24} />
    </button>
  );
};

export default IconButton;
