import { ReactNode, AnchorHTMLAttributes } from "react";
import styles from "./LinkButton.module.scss";
import clsx from "clsx";
import Link from "next/link";
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  disabled?: boolean;
  children: ReactNode;
}

const LinkButton = ({
  href,
  disabled,
  className,
  children,
  ...rest
}: Props) => {
  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        styles.container,
        { [styles.disabled]: disabled },
        className
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
