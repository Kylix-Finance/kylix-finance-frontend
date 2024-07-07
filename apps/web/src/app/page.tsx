import { Metadata } from "next";
import { metadataGenerator } from "~/config/metadata";

export const metadata: Metadata = metadataGenerator({
  title: "Dashboard",
});

export default function page() {
  return (
    <span className="w-full h-[8000px] bg-gradient-to-b from-slate-400 to-green-500" />
  );
}
