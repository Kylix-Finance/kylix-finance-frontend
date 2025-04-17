import { ReactNode } from "react";
import Background from "~/components/background/Background";

interface Props {
  children: ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      {/* <Background /> */}

      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
