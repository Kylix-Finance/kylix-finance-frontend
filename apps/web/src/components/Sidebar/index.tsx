"use client";

import { Box, Drawer, Link, List, ListItem, Typography } from "@mui/material";
import { sidebar, socialMediaLinks } from "~/assets/data";
import { Item } from "./Item";
import { Icons } from "~/assets/svgs";

const Sidebar = () => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className="w-[290px] h-screen bg-white"
      open
      PaperProps={{
        component: "div",
        className:
          "w-[inherit] bg-[inherit] !bg-[inherit] !border-none hide-scrollbar ",
      }}
    >
      <Box className="flex flex-col items-center justify-between h-[inherit] pb-6 w-full">
        <Box className="flex flex-col w-full">
          <Box className="w-full h-full bg-primary-500 flex flex-col justify-center items-center py-10 px-16 sticky top-0">
            <Icons.KylixLogo />
          </Box>
          <Box className="flex flex-col mt-6 gap-8">
            {sidebar.map((section) => {
              return (
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
                        <Item data={item} collapsable={!!item.items?.length} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="flex flex-col items-center">
          <Box className="flex items-center justify-center">
            {socialMediaLinks.map(({ icon: Icon, link }) => (
              <Link key={link} href={link}>
                <Icon className="text-primary-500 w-10 h-10" />
              </Link>
            ))}
          </Box>
          <p className="text-primary-300 font-medium text-xs leading-5 tracking-[-2%] select-none">
            <span>&#169;</span>
            <span>KYLIX Version 1.0</span>
          </p>
        </Box>
      </Box>
    </Drawer>
  );
};
export default Sidebar;
