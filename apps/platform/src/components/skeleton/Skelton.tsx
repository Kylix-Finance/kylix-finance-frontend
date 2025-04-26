import { ReactNode } from "react";
import BaseSkeleton, { SkeletonProps } from "react-loading-skeleton";
import styles from "./Skelton.module.scss";
import clsx from "clsx";

interface Props extends SkeletonProps {
  isLoading?: boolean;
  children?: ReactNode;
}

const Skeleton = ({ children, isLoading, className, ...rest }: Props) => {
  if (isLoading)
    return (
      <BaseSkeleton {...rest} className={clsx(className, styles.container)} />
    );

  return children;
};

export default Skeleton;
