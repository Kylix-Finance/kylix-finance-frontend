import { MouseEvent, useState, ReactElement } from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SidebarItem } from "~/types";
import { usePathname } from "next/navigation";
import { cn } from "~/utils";
import SubItem from "./SubItem";
import ItemIcon from "./ItemIcon";

const linkBaseStyles =
  "duration-300 flex items-center h-10 w-full rounded-lg overflow-hidden";

interface ItemProps {
  data: SidebarItem;
  collapsible?: boolean;
}

export const Item = ({
  data,
  collapsible = false,
}: ItemProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    if (collapsible) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prevState) => !prevState);
    }
  };

  const isCurrentPath = data.href ? pathname?.includes(data.href) : false;

  return (
    <Box className="flex flex-col gap-2 w-full">
      <Link
        onClick={clickHandler}
        className={cn(
          linkBaseStyles,
          isCurrentPath
            ? "bg-primary-500"
            : "hover:bg-primary-500/30 dark:hover:bg-primary-500/15"
        )}
        href={data.href || ""}
      >
        <ListItemButton className="pl-3">
          <ListItemIcon className="!min-w-0 mr-3">
            <ItemIcon Icon={data.icon} isCurrentPath={isCurrentPath} />
          </ListItemIcon>
          <ListItemText
            primary={data.name}
            className={cn(
              "duration-300 text-sm font-medium",
              isCurrentPath
                ? "text-white dark:text-black-500"
                : "text-primaryText dark:text-primary-400/50"
            )}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: isCurrentPath ? 700 : 500,
            }}
          />
          {collapsible &&
            (isOpen ? (
              <ExpandLess className="w-4 h-4" />
            ) : (
              <ExpandMore className="w-4 h-4" />
            ))}
        </ListItemButton>
      </Link>
      {collapsible && (
        <Collapse
          in={isOpen}
          timeout="auto"
          unmountOnExit
          className="w-[80%] self-end"
        >
          <Box className="flex gap-3.5 h-full">
            <Box
              height="100%"
              width="2px"
              bgcolor="#EAF6F4 dark:bg-black-500"
            />
            <List
              component="div"
              disablePadding
              className="flex flex-col gap-2  w-full"
            >
              {data.items?.map((subItem) => (
                <SubItem
                  linkBaseStyles={linkBaseStyles}
                  key={subItem.name}
                  subItem={subItem}
                  isCurrentPath={pathname === subItem.href}
                />
              ))}
            </List>
          </Box>
        </Collapse>
      )}
    </Box>
  );
};
