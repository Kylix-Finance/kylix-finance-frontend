import { ComponentProps } from "react";
import styles from "./CardWrapper.module.scss";
import clsx from "clsx";
interface Props extends ComponentProps<"div"> {}

const CardWrapper = ({ className, ...rest }: Props) => {
  return <div className={clsx(styles.container, className)} {...rest} />;
};

export default CardWrapper;
