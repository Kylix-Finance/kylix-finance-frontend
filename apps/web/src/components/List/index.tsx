import { ReactNode } from "react";
import { ListItem } from "./type";
import { List as MUIList } from "@mui/material";
import Item from "./Item";

interface Props {
  items: Array<ListItem>;
}

const List = ({ items }: Props) => {
  return (
    <MUIList className="!flex !flex-col !gap-3">
      {items.map((item, index) => (
        <Item
          label={item.label}
          value={item.value}
          kylixValue={item.kylixValue}
          key={index}
        />
      ))}
    </MUIList>
  );
};

export default List;
