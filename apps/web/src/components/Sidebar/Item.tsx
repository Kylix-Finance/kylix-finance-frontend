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
        className="hover:bg-primary-300 flex items-center h-10 w-full rounded-lg overflow-hidden pl-3"
        href={data.href || ""}
      >
        <ListItemIcon className="!min-w-0 mr-3">
          {data.icon && <data.icon className="w-5 h-5" />}
        </ListItemIcon>
        <ListItemText primary={data.name} />
        {collapsable ? (
          isOpen ? (
            <ExpandLess className="w-4 h-4 mr-3" />
          ) : (
            <ExpandMore className="w-4 h-4 mr-3" />
          )
        ) : null}
      </Link>
      {collapsable && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {data.items?.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href || ""}
                className="hover:bg-gray-100 flex items-center h-10 w-full rounded-lg overflow-hidden"
              >
                <ListItemButton className="hover:bg-gray-100">
                  <ListItemIcon>
                    {subItem.icon && <subItem.icon className="w-5 h-5 " />}
                  </ListItemIcon>
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
