import { Drawer } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className="w-[290px] h-screen bg-red-300"
    ></Drawer>
  );
};
export default Sidebar;
