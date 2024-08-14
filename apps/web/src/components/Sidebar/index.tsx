"use client";
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { sidebar, socialMediaLinks } from "~/assets/data";
import { Item } from "./Item";
import { Icons } from "~/assets/svgs";
import { useSidebarStore } from "~/store";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import ClientOnly from "../ClientOnly";

const Sidebar = () => {
  // const { isSidebarOpen, setSidebarOpen, setMobile } = useSidebarStore();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // useEffect(() => {
  //   setMobile(isMobile);
  //   if (!isMobile) {
  //     setSidebarOpen(true);
  //   }
  // }, [isMobile, isSidebarOpen, setMobile, setSidebarOpen]);

  return (
    <Drawer
      variant={"persistent"}
      anchor="left"
      open={true}
      // onClose={() => setSidebarOpen(!isSidebarOpen)}
      className="w-[290px] h-screen bg-white"
      PaperProps={{
        component: "div",
        className:
          "w-[inherit] bg-[inherit] !bg-[inherit] !border-none hide-scrollbar",
      }}
    >
      <Box className="flex flex-col items-center justify-between h-[inherit] pb-6 w-full">
        <Box className="flex flex-col w-full">
          <Box className="w-full h-full bg-primary-500 flex flex-col justify-center items-center py-10 px-16 sticky top-0 z-50">
            <Icons.KylixLogo />
          </Box>
          <Box className="flex flex-col mt-6 gap-8">
            {sidebar.map((section) => (
              <Box
                key={section.heading}
                className="text-black flex flex-col w-full px-6"
              >
                <Typography variant="caption" marginLeft="12px">
                  {section.heading}
                </Typography>
                <List className="w-full flex flex-col gap-2">
                  {section.items.map((item) => (
                    <ListItem
                      key={item.name}
                      className="w-full flex flex-col !px-0 !py-0"
                    >
                      <Item data={item} collapsible={!!item.items?.length} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex flex-col items-center gap-2.5">
          <Box className="flex items-center justify-center  gap-3">
            {socialMediaLinks.map(({ icon: Icon, link }) => (
              <Link
                key={link}
                href={link}
                className="flex items-center justify-center rounded-full border border-primary-500/20"
              >
                <Icon className="text-primary-500" />
              </Link>
            ))}
          </Box>
          <Typography
            variant="caption"
            className="text-primary-300 select-none"
          >
            <span>&#169;</span>
            <span>KYLIX Version 1.0</span>
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
