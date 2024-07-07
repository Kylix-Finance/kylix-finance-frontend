import { Collapse, Link } from "@mui/material";
import { useState } from "react";
import { SidebarItem } from "~/types";

interface ItemProps {
  data: SidebarItem;
  collapsable?: boolean;
}
export const Item = ({ data, collapsable }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    if (collapsable) {
      setIsOpen((o) => !o);
    }
  };
  return (
    <Collapse in={isOpen} onClick={clickHandler} timeout="auto" unmountOnExit>
      <Link href={data.href || ""}>{data.name}</Link>
    </Collapse>
  );
};

interface SidebarMenuProps {
  items: SidebarItem[];
}
export const SidebarMenu = ({ items }: SidebarMenuProps) => {
  return items.map((item) => {
    if (item.items?.length) {
      return (
        <div key={item.name} className="flex flex-col">
          <Item data={item} />
        </div>
      );
    } else {
      return <Item key={item.name} data={item} />;
    }
  });
};
