import { Skeleton as MuiSkeleton, SkeletonProps } from "@mui/material";
import React, { CSSProperties } from "react";

interface Props extends SkeletonProps {
  isLoading?: boolean;
  children?: React.ReactNode;
  minWidth?: CSSProperties["minWidth"];
}

const Skeleton = ({ minWidth, isLoading, children, style, ...rest }: Props) => {
  if (isLoading) {
    return (
      <MuiSkeleton
        style={{
          ...style,
          minWidth: style?.minWidth || minWidth,
        }}
        {...rest}
      />
    );
  }
  return children;
};

export default Skeleton;
