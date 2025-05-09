import { ReactNode } from "react";
import { mergeMetadata } from "~/utils/metadata";
import { metaTags } from "~/constants/metadata";
export const metadata = mergeMetadata(metaTags.dashboard);
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return children;
}
