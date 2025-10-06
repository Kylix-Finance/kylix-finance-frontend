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
  const { circle, baseColor, highlightColor, ...skeletonProps } = rest;

  if (isLoading) {
    const resolvedBorderRadius = circle
      ? borderRadius
      : rounded
        ? (borderRadius ?? 9999)
        : borderRadius;

    return (
      <BaseSkeleton
        {...skeletonProps}
        circle={circle}
        baseColor={baseColor ?? "var(--color-neutral-700)"}
        highlightColor={highlightColor ?? "var(--color-neutral-800)"}
        borderRadius={resolvedBorderRadius}
        style={style}
        className={clsx(className, styles.container, {
          [styles.rounded]: rounded && !circle,
        })}
      />
    );
  }

  return children;
};
