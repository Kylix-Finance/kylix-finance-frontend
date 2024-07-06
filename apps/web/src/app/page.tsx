import { Metadata } from "next";
import { metadataGenerator } from "~/config/metadata";

export const metadata: Metadata = metadataGenerator({
  title: "Dashboard",
});

export default function page() {
  return <div></div>;
}
