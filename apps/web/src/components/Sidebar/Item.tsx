"use client";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MouseEvent, useMemo, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SidebarItem } from "~/types";
import { usePathname } from "next/navigation";
import { cn } from "~/utils";

interface ItemProps {
  data: SidebarItem;
  collapsable?: boolean;
}

export const Item = ({ data, collapsable }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    if (collapsable) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prevState) => !prevState);
    }
  };

  const isCurrentPath = pathname === data.href;

  const renderIcon = (
    IconComponent: React.ElementType | undefined,
    className: string
  ) => {
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  const renderSubItems = (items: SidebarItem[] | undefined) => {
    return items?.map((subItem) => (
      <Link
        key={subItem.name}
        href={subItem.href || ""}
        className={cn(
          "hover:bg-gray-100 flex items-center h-10 w-full rounded-lg overflow-hidden"
        )}
      >
        <ListItemButton className="hover:bg-gray-100">
          <ListItemIcon>{renderIcon(subItem.icon, "w-5 h-5")}</ListItemIcon>
          <ListItemText primary={subItem.name} />
        </ListItemButton>
      </Link>
    ));
  };

  return (
    <>
      <Link
        onClick={clickHandler}
        className={cn(
          "hover:bg-primary-300 flex items-center h-10 w-full rounded-lg overflow-hidden pl-3",
          { ["bg-primary-500"]: isCurrentPath }
        )}
        href={data.href || ""}
      >
        <ListItemButton className="hover:bg-gray-100">
          <ListItemIcon className="!min-w-0 mr-3">
            {renderIcon(data.icon, "w-5 h-5")}
          </ListItemIcon>
          <ListItemText primary={data.name} />
          {collapsable &&
            (isOpen ? (
              <ExpandLess className="w-4 h-4 mr-3" />
            ) : (
              <ExpandMore className="w-4 h-4 mr-3" />
            ))}
        </ListItemButton>
      </Link>
      {collapsable && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {renderSubItems(data.items)}
          </List>
        </Collapse>
      )}
    </>
  );
};
