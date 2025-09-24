import { ReactNode } from "react";
import { mergeMetadata } from "~/utils/metadata";
import { metaTags } from "~/constants/metadata";
import { notFound } from "next/navigation";
export const metadata = mergeMetadata(metaTags.portfolio);
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  notFound();
  return null;
}
