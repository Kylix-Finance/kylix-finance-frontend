import { ReactNode } from "react";
import styles from "./SelectBox.module.scss";
import { PopoverPanel } from "~/components/popover-panel/PopoverPanel";
import clsx from "clsx";

interface Props<T> {
  options: T[];
  value?: T;
  onChange?: (value: T) => void;
  renderOption: (option: T) => ReactNode;
  renderValue: (value: T) => ReactNode;
  className?: string;
  optionsClassName?: string;
}

const SelectBox = <T extends string | number>({
  options,
  value,
  onChange,
  renderOption,
  renderValue,
  className,
  optionsClassName,
}: Props<T>) => {
  const Selector = () => (
    <div className={clsx(styles.selector, className)}>
      {value ? renderValue(value) : null}
    </div>
  );

  const OptionsList = () => (
    <div className={clsx(styles.optionsList, optionsClassName)}>
      {options.map((option) => (
        <button
          key={option}
          className={clsx(styles.option, {
            [styles.selectedOption]: option === value,
          })}
          onClick={() => onChange?.(option)}
        >
          {renderOption(option)}
        </button>
      ))}
    </div>
  );

  return <PopoverPanel target={<Selector />} panel={<OptionsList />} />;
};

export default SelectBox;
