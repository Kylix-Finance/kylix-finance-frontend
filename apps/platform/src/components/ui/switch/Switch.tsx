import { ComponentPropsWithRef, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Switch.module.scss";
import Warning from "~/assets/icons/warning.svg";

interface Props extends ComponentPropsWithRef<"input"> {
  label?: ReactNode;
  name: string;
  className?: string;
  fullWidth?: boolean;
}
const Switch = ({
  label,
  name,
  className,
  fullWidth,
  disabled,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.full_width]: fullWidth },
        className
      )}
    >
      {label && <span>{label}</span>}
      <input
        {...props}
        disabled={disabled}
        className={styles.switch_input}
        id={name}
        name={name}
        type="checkbox"
      />
      <label className={styles.switch_label} htmlFor={name} />
      {disabled && (
        <Warning width={24} height={24} className={styles.disabled_icon} />
      )}
    </div>
  );
};
export default Switch;
