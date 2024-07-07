import { Box, Drawer } from "@mui/material";
import Footer from "./footer";

const Sidebar = () => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className="w-[290px] h-screen"
      open
      PaperProps={{
        component: "div",
        className: "w-[inherit] bg-[inherit] !bg-[inherit]",
      }}
    >
      <Footer />
    </Drawer>
  );
};
export default Sidebar;
