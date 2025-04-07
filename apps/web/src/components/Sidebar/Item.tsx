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
  "duration-300 flex items-center h-10 w-full rounded-lg overflow-hidden  dark:text-[#707F7A]";

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
        className={cn(
          linkBaseStyles,
          isCurrentPath
            ? "bg-[#45A996] dark:bg-[#56DDB4]"
            : "hover:bg-primary-500/30 dark:hover:bg-primary-500/15"
        )}
        href={data.href || ""}
        onClick={clickHandler}
      >
        <ListItemButton className="pl-3">
          <ListItemIcon className="!min-w-0 mr-3">
            <ItemIcon Icon={data.icon} isCurrentPath={isCurrentPath} />
          </ListItemIcon>
          <ListItemText
            className={cn(
              "duration-300 text-sm font-medium",
              isCurrentPath
                ? "text-white dark:text-[#0D0D0D]"
                : "text-[#5C5E64] dark:text-[#707F7A]"
            )}
            primary={data.name}
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
          unmountOnExit
          className="w-[80%] self-end"
          in={isOpen}
          timeout="auto"
        >
          <Box className="flex gap-3.5 h-full">
            <Box
              bgcolor="#EAF6F4 dark:bg-black-500"
              height="100%"
              width="2px"
            />
            <List
              disablePadding
              className="flex flex-col gap-2  w-full"
              component="div"
            >
              {data.items?.map((subItem) => (
                <SubItem
                  key={subItem.name}
                  isCurrentPath={pathname === subItem.href}
                  linkBaseStyles={linkBaseStyles}
                  subItem={subItem}
                />
              ))}
            </List>
          </Box>
        </Collapse>
      )}
    </Box>
  );
};
