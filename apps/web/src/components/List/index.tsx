import { List as MUIList } from "@mui/material";
import Item from "./Item";
export type ListItem = {
  label: string;
  value: string;
  kylixValue?: string;
  tooltipTitle?: string;
  labelClassName?: string;
  valueClassName?: string;
  action?: {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
};
interface Props {
  items: Array<ListItem>;
}

const List = ({ items }: Props) => {
  return (
    <MUIList className="!flex !flex-col !gap-3">
      {items.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </MUIList>
  );
};

export default List;
