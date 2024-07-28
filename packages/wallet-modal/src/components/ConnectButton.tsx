"use client";

import { useDisconnect } from "../hooks";
import { useModalStore } from "../stores/modal";
import Dropdown, { DropdownOption } from "./Dropdown";
import { Settings, UserFill } from "./Icons";

interface Props {
  address: string | undefined;
}

export const ConnectButton: React.FC<Props> = ({ address }) => {
  const modalState = useModalStore();

  const { disconnect } = useDisconnect();

  const handleOpenWalletModal = () => modalState.setIsOpen(true);

  const handleDropdownItemClick = (name: DropdownOption["name"]) => {
    const handlers: Record<DropdownOption["name"], VoidFunction> = {
      disconnect,
      switchAccount: handleChangeToSwitchStage,
    };

    handlers[name]();
  };

  const handleChangeToSwitchStage = () => {
    modalState.setStage("switchAccount");
    modalState.setIsOpen(true);
  };

  const onConnectClick = address ? undefined : handleOpenWalletModal;

  const options: DropdownOption[] = [
    {
      name: "switchAccount",
      label: "switch Account",
      Icon: () => <SwitchIcon />,
    },
    {
      name: "disconnect",
      label: "Disconnect",
      Icon: () => <UserFillIcon />,
    },
  ];

  return (
    <Dropdown
      onItemClick={handleDropdownItemClick}
      options={options}
      isEnabled={!!address}
    >
      <button
        className="select-none shadow-md cursor-pointer transition transform hover:shadow-lg hover:-translate-y-1 active:shadow-md active:translate-y-0 flex justify-between items-center gap-2 p-2 rounded-sm bg-[#FFF] text-[#5C5E64] w-[143px] h-[40px]"
        onClick={onConnectClick}
      >
        {address ? (
          <>
            <UserFillIcon />

            <span className="w-[63px]">
              <ButtonText
                text={`${address.slice(0, 3)}...${address.slice(-4, -1)}`}
              />
            </span>

            <SwitchIcon />
          </>
        ) : (
          <ButtonText text="Connect Wallet" />
        )}
      </button>
    </Dropdown>
  );
};

const ButtonText: React.FC<{ text: string }> = ({ text }) => {
  return <span className="font-[500] w-full text-[12px]">{text}</span>;
};

const SwitchIcon = () => {
  return (
    <span className="size-[24px] bg-[#45A996] flex justify-center items-center gap-[10px] rounded-sm">
      <Settings />
    </span>
  );
};

const UserFillIcon = () => {
  return (
    <span className="size-[24px] bg-[#F4FAF9] flex justify-center items-center gap-[10px] rounded-sm">
      <UserFill />
    </span>
  );
};
