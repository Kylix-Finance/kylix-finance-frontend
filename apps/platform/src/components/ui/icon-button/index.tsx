import { ComponentPropsWithRef } from "react";
import DiscordIcon from "~/assets/icons/discord";
import styles from "./index.module.scss";
interface Props extends ComponentPropsWithRef<"button"> {
  mode?: "fill" | "outline";
}

const IconButton = ({ mode = "fill", ...rest }: Props) => {
  return (
    <button className={styles.container} data-mode={mode} {...rest}>
      <DiscordIcon width={24} height={24} />
    </button>
  );
};

export default IconButton;
