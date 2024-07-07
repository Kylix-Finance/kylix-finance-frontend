import NextLink, { LinkProps } from "next/link";
import { ForwardedRef, forwardRef } from "react";

interface Props extends LinkProps {}
const ThemeLink = (props: Props, ref: ForwardedRef<HTMLAnchorElement>) => {
  return <NextLink ref={ref} {...props} />;
};

export default forwardRef(ThemeLink);
