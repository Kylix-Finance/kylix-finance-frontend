"use client";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SidebarItem } from "~/types";

interface ItemProps {
  data: SidebarItem;
  collapsable?: boolean;
}

export const Item = ({ data, collapsable }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    if (collapsable) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((o) => !o);
    }
  };

  return (
    <>
      <Link
        onClick={clickHandler}
        className="hover:bg-gray-100 flex items-center h-10 w-full"
        href={data.href || ""}
      >
        <ListItemIcon>
          {data.icon && <data.icon className="w-5 h-5 ml-9 mr-3" />}
        </ListItemIcon>
        <ListItemText primary={data.name} />
        {collapsable ? isOpen ? <ExpandLess /> : <ExpandMore /> : null}
      </Link>
      {collapsable && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {data.items?.map((subItem) => (
              <Link
                href={subItem.href || ""}
                key={subItem.name}
                className="pl-12"
              >
                <ListItemButton className="hover:bg-gray-100">
                  <ListItemText primary={subItem.name} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
