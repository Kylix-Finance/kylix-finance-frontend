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
import { usePathname } from "next/navigation";
import { cn } from "~/utils";

const linkBaseStyles =
  "hover:bg-primary-500/30 flex items-center h-10 w-full rounded-lg overflow-hidden";
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

  const renderIcon = (IconComponent: React.ElementType | undefined) => {
    return IconComponent ? (
      <IconComponent
        className={cn("w-5 h-5 text-primary-500", {
          ["text-white"]: isCurrentPath,
        })}
      />
    ) : null;
  };

  const textStyles = isCurrentPath ? "text-white" : "text-primaryText";
  const renderSubItems = (items: SidebarItem[] | undefined) => {
    return items?.map((subItem) => (
      <Link
        key={subItem.name}
        href={subItem.href || ""}
        className={cn(linkBaseStyles)}
      >
        <ListItemButton className="w-full">
          <ListItemIcon>{renderIcon(subItem.icon)}</ListItemIcon>
          <ListItemText primary={subItem.name} className={cn(textStyles)} />
        </ListItemButton>
      </Link>
    ));
  };
  return (
    <>
      <Link
        onClick={clickHandler}
        className={cn(linkBaseStyles, { ["bg-primary-500"]: isCurrentPath })}
        href={data.href || ""}
      >
        <ListItemButton className="pl-3">
          <ListItemIcon className="!min-w-0 mr-3">
            {renderIcon(data.icon)}
          </ListItemIcon>
          <ListItemText primary={data.name} className={cn(textStyles)} />
          {collapsable &&
            (isOpen ? (
              <ExpandLess className="w-4 h-4 mr-3" />
            ) : (
              <ExpandMore className="w-4 h-4 mr-3" />
            ))}
        </ListItemButton>
      </Link>
      {collapsable && (
        <Collapse
          in={isOpen}
          timeout="auto"
          unmountOnExit
          className="w-[90%] self-end"
        >
          <List component="div" disablePadding className="w-full">
            {renderSubItems(data.items)}
          </List>
        </Collapse>
      )}
    </>
  );
};
