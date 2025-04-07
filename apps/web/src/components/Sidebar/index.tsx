"use client";
import { Box, Drawer, Link, List, ListItem, Typography } from "@mui/material";
import { sidebar, socialMediaLinks } from "~/assets/data";
import { Item } from "./Item";
import Image from "next/image";
import { kylixLogoImg } from "~/assets/imgs";

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
      open
      anchor="left"
      className="w-[290px] h-screen bg-white dark:bg-[#0D0D0D]"
      PaperProps={{
        component: "div",
        className:
          "w-[inherit] bg-[inherit] !bg-[inherit] !border-none hide-scrollbar",
      }}
      variant="persistent"
      // onClose={() => setSidebarOpen(!isSidebarOpen)}
    >
      <Box className="flex flex-col items-center justify-between h-[inherit] pb-6 w-full">
        <Box className="flex flex-col w-full">
          <Box className="w-full h-full bg-[#45A996] dark:bg-[#0D0D0D] flex flex-col justify-center items-center py-10 px-16 sticky top-0 z-50">
            <Image alt="" quality={100} src={kylixLogoImg} width={320} />
          </Box>
          <Box className="flex flex-col mt-6 gap-8">
            {sidebar.map((section) => (
              <Box
                key={section.heading}
                className="text-black flex flex-col w-full px-6"
              >
                <Typography marginLeft="12px" variant="caption">
                  {section.heading}
                </Typography>
                <List className="w-full flex flex-col gap-2">
                  {section.items.map((item) => (
                    <ListItem
                      key={item.name}
                      className="w-full flex flex-col !px-0 !py-0"
                    >
                      <Item collapsible={!!item.items?.length} data={item} />
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
                className="flex items-center justify-center rounded-full border border-primary-500/20 w-8 h-8"
                href={link}
              >
                <Icon className="text-primary-500 w-7 h-7" />
              </Link>
            ))}
          </Box>
          <Typography
            className="text-primary-300 select-none"
            variant="caption"
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
