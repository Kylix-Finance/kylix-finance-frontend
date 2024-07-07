import { Box, Drawer, Link } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import { sidebar } from "~/assets/data";

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
        <div className="flex flex-col">
          {sidebar.map((item) => {
            return (
              <div key={item.heading} className="text-black flex flex-col">
                <p>{item.heading}</p>
                <div className="flex flex-col">
                  {item.items.map((link) => {
                    if (link.items?.length) {
                      return (
                        <div className="bg-red-200" key={link.name}>
                          {link.name}
                        </div>
                      );
                    } else {
                      return (
                        <Link key={link.name} href={link.href || ""}>
                          {link.name}
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </Drawer>
  );
};
export default Sidebar;
