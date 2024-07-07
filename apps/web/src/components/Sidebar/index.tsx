import { Box, Drawer } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const Sidebar = () => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className="w-[290px] h-screen"
      open
      PaperProps={{
        component: "div",
        className: "w-[inherit] bg-[inherit] !bg-[inherit] !border-none",
      }}
    >
      <div className="flex flex-col items-center justify-between h-[inherit] pb-6 w-full">
        <div className="flex flex-col w-full h-48">
          <Header />
        </div>
        <Footer />
      </div>
    </Drawer>
  );
};
export default Sidebar;
