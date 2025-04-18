import dynamic from "next/dynamic";
import { Icon as IconType } from "../../../types";
import { ComponentPropsWithRef, ComponentType } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
interface Props extends ComponentPropsWithRef<"svg"> {
  name: IconType;
  disabled?: boolean;
  disableHover?: boolean;
}

export const Icon = ({
  name,
  disabled,
  disableHover,
  className,
  ...rest
}: Props) => {
  const IconComponent = dynamic(
    () => import(`~/assets/icons/${name}`)
  ) as ComponentType<ComponentPropsWithRef<"svg">>;

  return (
    <IconComponent
      {...rest}
      className={clsx(styles.container, className)}
      data-disabled={disabled}
      data-disable-hover={disableHover}
    />
  );
};
