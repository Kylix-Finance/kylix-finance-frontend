import { PropsWithChildren } from "react";
import SidebarLayout from "~/layouts/sidebar-layout";

export default function Layout({ children }: PropsWithChildren) {
  return <SidebarLayout>{children}</SidebarLayout>;
}
