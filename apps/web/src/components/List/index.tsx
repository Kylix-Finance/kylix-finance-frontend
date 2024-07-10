import { List as MUIList } from "@mui/material";
import Item from "./Item";
export type ListItem = {
  label: string;
  value: string;
  kylixValue?: string;
};
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
