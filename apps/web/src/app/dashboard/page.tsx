import { Metadata } from "next";
import { metadataGenerator } from "~/config/metadata";
export const metadata: Metadata = metadataGenerator({
  title: "Dashboard",
});

const Page = () => {
  return <div></div>;
};
export default Page;
