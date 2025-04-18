import { ComponentPropsWithRef, ElementType } from "react";
import DiscordIcon from "~/assets/icons/discord";
import styles from "./index.module.scss";
interface Props extends Omit<ComponentPropsWithRef<"button">, "children"> {
  mode?: "fill" | "outline";
  icon: ElementType;
}

const IconButton = ({ mode = "fill", icon: Icon, ...rest }: Props) => {
  return (
    <button className={styles.container} data-mode={mode} {...rest}>
      <Icon width={24} height={24} />
    </button>
  );
};

export default IconButton;
