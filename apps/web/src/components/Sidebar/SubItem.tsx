import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SidebarItem } from "~/types";
import { cn } from "~/utils";
import ItemIcon from "./ItemIcon";

interface SubItemProps {
  subItem: Omit<SidebarItem, "icon">;
  isCurrentPath: boolean;
  linkBaseStyles: string;
}
const SubItem = ({ subItem, isCurrentPath, linkBaseStyles }: SubItemProps) => (
  <Link
    key={subItem.name}
    href={subItem.href || ""}
    className={cn(
      linkBaseStyles,
      isCurrentPath ? "bg-primary-500" : "hover:bg-primary-500/30"
    )}
  >
    <ListItemButton className="w-full">
      <ListItemText
        primary={subItem.name}
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: isCurrentPath ? 700 : 500,
        }}
        className={cn(
          "duration-300",
          isCurrentPath ? "text-white" : "text-primaryText"
        )}
      />
    </ListItemButton>
  </Link>
);
export default SubItem;
