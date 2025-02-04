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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (name: DropdownOption["name"]) => {
    handleClose();
    onItemClick(name);
  };

  return (
    <div className="relative inline-block text-left z-[9999]">
      <div onClick={isEnabled ? handleToggle : undefined}>{children}</div>

      {isOpen && (
        <>
          <div
            className="z-[9998] w-[100vw] h-[100vh]"
            style={{
              position: "fixed",
              backgroundColor: "transparent",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
            onClick={isEnabled ? handleToggle : undefined}
          />

          <div
            className="opacity-100 scale-100 origin-top-right absolute z-[9999] right-0 mt-2 w-56 rounded-sm shadow-lg bg-white dark:bg-black-500 transition-all duration-150 ease-out"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="p-1" role="none">
              {options.map((option) => (
                <button
                  key={option.name}
                  className="flex gap-2 items-center text-gray-700 dark:text-primary-100 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-black-400/70"
                  role="menuitem"
                  onClick={() => handleMenuItemClick(option.name)}
                >
                  {typeof option.Icon === "function" ? (
                    <option.Icon />
                  ) : (
                    option.Icon
                  )}

                  <span className="font-[500] text-[12px] text-[#5C5E64] dark:text-primary-100">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
