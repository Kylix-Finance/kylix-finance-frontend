import React, { PropsWithChildren, useState } from "react";

export interface DropdownOption {
  name: "switchAccount" | "disconnect";
  label: string;
  Icon?: React.JSX.Element | React.FC;
}

interface Props extends PropsWithChildren {
  isEnabled: boolean;
  options: Array<DropdownOption>;
  onItemClick: (name: DropdownOption["name"]) => void;
}

export const Dropdown: React.FC<Props> = ({
  onItemClick,
  children,
  isEnabled,
  options,
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (name: DropdownOption["name"]) => {
    handleClose();
    onItemClick(name);
  };

  return (
    <div className="relative inline-block text-left z-[9999]">
      <div onClick={isEnabled ? handleToggle : undefined}>{children}</div>

      <div
        className={`${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } origin-top-right absolute right-0 mt-2 w-56 rounded-sm shadow-lg bg-white transition-all duration-150 ease-out`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="p-1" role="none">
          {options.map((option) => (
            <button
              key={option.name}
              className="flex gap-2 items-center text-gray-700 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleMenuItemClick(option.name)}
            >
              {typeof option.Icon === "function" ? (
                <option.Icon />
              ) : (
                option.Icon
              )}

              <span className="font-[500] text-[12px] text-[#5C5E64]">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
