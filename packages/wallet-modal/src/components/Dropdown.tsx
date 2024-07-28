import React, { PropsWithChildren, useState } from "react";

export interface DropdownOption {
  name: "switchAccount" | "disconnect";
  label: string;
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
    <div className="relative inline-block text-left">
      <div onClick={isEnabled ? handleToggle : undefined}>{children}</div>

      <div
        className={`${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-150 ease-out`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <button
              key={option.name}
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleMenuItemClick(option.name)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
