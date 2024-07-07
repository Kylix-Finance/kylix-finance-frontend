import { Box, Drawer } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className="w-[290px] h-screen bg-red-500 "
      open
      PaperProps={{
        component: "div",
        className: "w-[inherit] bg-[inherit] !bg-[inherit]",
      }}
    ></Drawer>
  );
};
export default Sidebar;
