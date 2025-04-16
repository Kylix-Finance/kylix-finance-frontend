import { Box } from "@mui/material";
import Image, { ImageProps } from "next/image";
import React from "react";

type SizeProps =
  | { size?: number; width?: never; height?: never }
  | { size?: never; width?: number; height?: number };

export type DynamicIconProps = ImageProps &
  SizeProps & {
    isDisabled?: boolean;
  };

export const ImageIcon = ({
  height,
  // isDisabled,
  size,
  src,
  width,
  alt,
  ...rest
}: DynamicIconProps) => {
  const finalSize = size ?? 24;
  const finalWidth = width ?? finalSize;
  const finalHeight = height ?? finalSize;

  return (
    <Box
    //! grey background when disabled
    >
      <Image
        alt={alt || "image-icon"}
        height={finalHeight}
        src={src}
        width={finalWidth}
        {...rest}
      />
    </Box>
  );
};
