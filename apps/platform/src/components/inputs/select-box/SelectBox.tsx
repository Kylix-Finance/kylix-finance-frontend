import { ReactNode, useState, useEffect } from "react";
import styles from "./SelectBox.module.scss";
import { PopoverPanel } from "~/components/popover-panel/PopoverPanel";
import clsx from "clsx";
import { Check, ChevronDown } from "~/assets/icons";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<T | undefined>(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleOptionClick = (option: T) => {
    setSelectedValue(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <PopoverPanel
      target={
        <div className={clsx(styles.selector, className)}>
          {selectedValue ? renderValue(selectedValue) : null}
          <ChevronDown
            className={clsx(styles.chevron, { [styles.chevron_open]: isOpen })}
          />
        </div>
      }
      panel={
        <div className={clsx(styles.options_list, optionsClassName)}>
          {options.map((option) => (
            <button
              key={option}
              className={clsx(styles.option, {
                [styles.selected_option]: option === selectedValue,
              })}
              onClick={() => handleOptionClick(option)}
            >
              <div className={styles.option_wrapper}>
                {renderOption(option)}
              </div>
              {option === selectedValue && (
                <Check className={styles.check_icon} />
              )}
            </button>
          ))}
        </div>
      }
      onOpenChange={setIsOpen}
      open={isOpen}
    />
  );
};

export default SelectBox;
