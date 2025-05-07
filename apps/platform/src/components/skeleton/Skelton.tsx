import { ReactNode } from "react";
import BaseSkeleton, { SkeletonProps } from "react-loading-skeleton";
import styles from "./Skelton.module.scss";
import clsx from "clsx";

interface Props extends SkeletonProps {
  isLoading?: boolean;
  children?: ReactNode;
  rounded?: boolean;
  borderRadius?: number;
}

export const Skeleton = ({
  children,
  isLoading,
  className,
  rounded = true,
  style,
  borderRadius,
  ...rest
}: Props) => {
  if (isLoading)
    return (
      <BaseSkeleton
        {...rest}
        style={{
          borderRadius,
          ...style,
        }}
        className={clsx(className, styles.container, {
          [styles.rounded]: rounded,
        })}
      />
    );

  return children;
};
