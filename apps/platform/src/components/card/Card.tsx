import { ComponentProps } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";

type CardProps = ComponentProps<"div">;

export const Card = ({ className, ...rest }: CardProps) => {
  return <div className={clsx(styles.card, className)} {...rest}></div>;
};
