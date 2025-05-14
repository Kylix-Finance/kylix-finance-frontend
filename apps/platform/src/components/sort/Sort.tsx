import { Sort as SortItem } from "~/types";
import styles from "./Sort.module.scss";
import capitalize from "lodash/capitalize";
import { SelectBox } from "../inputs/select-box";
interface Props {
  items: Map<string, SortItem>;
  keys: string[];
  value: string;
  onChange: (value: string) => void;
}
const Sort = ({ items, onChange, value, keys }: Props) => {
  const render = (key: string) => {
    const option = items.get(key);
    if (!option) return null;
    return <div className={styles.item}>{capitalize(option.title)}</div>;
  };
  return (
    <SelectBox
      options={keys}
      onChange={onChange}
      renderOption={render}
      value={value}
      renderValue={render}
      className={styles.select}
    />
  );
};

export default Sort;
