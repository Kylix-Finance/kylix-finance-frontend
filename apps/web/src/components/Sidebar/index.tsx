"use client";

import { Box, Drawer, Link, List, ListItem } from "@mui/material";
import { sidebar, socialMediaLinks } from "~/assets/data";
import Image from "next/image";
import { Item } from "./Item";

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
      {/* FIXME: change background color to white */}
      <div className="flex flex-col items-center justify-between h-[inherit] pb-6 w-full">
        <div className="flex flex-col w-full">
          <div className="w-full h-full bg-primary-500 flex flex-col justify-center items-center py-10 px-16">
            <Image
              src="kylix-logo.svg"
              alt="kylix-logo"
              width={155}
              height={117}
              draggable="false"
            />
          </div>
          <div className="flex flex-col mt-6">
            {sidebar.map((section) => {
              return (
                <div
                  key={section.heading}
                  className="text-black flex flex-col w-full px-6"
                >
                  <p className="font-medium text-[10px] ml-3">
                    {section.heading}
                  </p>
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            {socialMediaLinks.map(({ icon: Icon, link }) => (
              <Link key={link} href={link}>
                <Icon className="text-primary-500 w-10 h-10" />
              </Link>
            ))}
          </div>
          <p className="text-primary-300 font-medium text-xs leading-5 tracking-[-2%] select-none">
            <span>&#169;</span>
            <span>KYLIX Version 1.0</span>
          </p>
        </div>
      </div>
    </Drawer>
  );
};
export default Sidebar;
