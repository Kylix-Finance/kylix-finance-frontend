import { List as MUIList } from "@mui/material";
import Item from "./Item";
import { ReactNode } from "react";
export type ListItem = {
  label: string;
  value: string | ReactNode;
  kylixValue?: string;
  tooltipTitle?: string;
  labelClassName?: string;
  valueClassName?: string;
  action?: {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
  };
};
interface Props {
  items: Array<ListItem>;
}

const List = ({ items }: Props) => {
  return (
    <MUIList className="!flex !flex-col !gap-3">
      {items.map((item, index) => (
        <Item {...item} key={item.label + index} />
      ))}
    </MUIList>
  );
};

export default List;
