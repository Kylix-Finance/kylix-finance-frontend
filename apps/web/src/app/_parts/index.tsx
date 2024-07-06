import { FC, PropsWithChildren } from "react";
import Sidebar from "./sidebar";

const Parts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-12 mx-6">{children}</div>
    </div>
  );
};
export default Parts;
