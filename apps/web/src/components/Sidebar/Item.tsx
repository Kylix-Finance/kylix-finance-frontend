import { MouseEvent, useState, ReactElement } from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SidebarItem } from "~/types";
import { usePathname } from "next/navigation";
import { cn } from "~/utils";
import SubItem from "./SubItem";
import ItemIcon from "./ItemIcon";

const linkBaseStyles =
  "duration-300 hover:bg-primary-500/30 flex items-center h-10 w-full rounded-lg overflow-hidden";

interface ItemProps {
  data: SidebarItem;
  collapsable?: boolean;
}

export const Item = ({
  data,
  collapsable = false,
}: ItemProps): ReactElement => {
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

  return (
    <>
      <Link
        onClick={clickHandler}
        className={cn(linkBaseStyles, { "bg-primary-500": isCurrentPath })}
        href={data.href || ""}
      >
        <ListItemButton className="pl-3">
          <ListItemIcon className="!min-w-0 mr-3">
            <ItemIcon Icon={data.icon} isCurrentPath={isCurrentPath} />
          </ListItemIcon>
          <ListItemText
            primary={data.name}
            className={cn(
              "duration-300",
              isCurrentPath ? "text-white" : "text-primaryText"
            )}
          />
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
            {data.items?.map((subItem) => (
              <SubItem
                linkBaseStyles=""
                key={subItem.name}
                subItem={subItem}
                isCurrentPath={isCurrentPath}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
