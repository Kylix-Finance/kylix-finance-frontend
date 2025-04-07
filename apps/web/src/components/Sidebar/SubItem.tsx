import { Link, ListItemButton, ListItemText } from "@mui/material";
import { SidebarItem } from "~/types";
import { cn } from "~/utils";

interface SubItemProps {
  subItem: Omit<SidebarItem, "icon">;
  isCurrentPath: boolean;
  linkBaseStyles: string;
}
const SubItem = ({ subItem, isCurrentPath, linkBaseStyles }: SubItemProps) => (
  <Link
    key={subItem.name}
    className={cn(
      linkBaseStyles,
      isCurrentPath
        ? "bg-primary-500 dark:text-black-500"
        : "hover:bg-primary-500/30 dark:bg-primary-500/80"
    )}
    href={subItem.href || ""}
  >
    <ListItemButton className="w-full">
      <ListItemText
        className={cn(
          "duration-300",
          isCurrentPath
            ? "text-white dark:text-black-500"
            : "text-primaryText dark:text-black-500"
        )}
        primary={subItem.name}
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: isCurrentPath ? 700 : 500,
        }}
      />
    </ListItemButton>
  </Link>
);
export default SubItem;
