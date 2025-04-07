"use client";

import { useDisconnect } from "../hooks";
import { useModalStore } from "../stores/modal";
import Dropdown, { DropdownOption } from "./Dropdown";
import { Settings, UserFill } from "./Icons";
import { Disconnect } from "./Icons/Disconnect";
import { SwitchAccount } from "./Icons/SwitchAccount";

interface Props {
  address: string | undefined;
}

export const ConnectButton: React.FC<Props> = ({ address }) => {
  const modalState = useModalStore();

  const { disconnect } = useDisconnect();

  const handleOpenWalletModal = () => modalState.setIsOpen(true);

  const handleDropdownItemClick = (name: DropdownOption["name"]) => {
    const handlers: Record<DropdownOption["name"], globalThis.VoidFunction> = {
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
      label: "Switch Account",
      Icon: SwitchAccountIcon,
    },
    {
      name: "disconnect",
      label: "Disconnect",
      Icon: DisconnectIcon,
    },
  ];

  return (
    <Dropdown
      onItemClick={handleDropdownItemClick}
      options={options}
      isEnabled={!!address}
    >
      <button
        className="select-none cursor-pointer transition transform hover:shadow-lg active:shadow-md active:translate-y-0 flex justify-between items-center gap-2 p-2 rounded-sm bg-[#FFF] dark:bg-[#0D0D0D] dark:bg- text-[#5C5E64] dark:text-primary-100 w-[143px] h-[40px]"
        onClick={onConnectClick}
      >
        {address ? (
          <>
            <UserFillIcon />

            <span className="w-[63px]">
              <ButtonText
                text={`${address.slice(0, 3)}...${address.slice(-4)}`}
              />
            </span>

            <SettingsIcon />
          </>
        ) : (
          <ButtonText text="Connect Wallet" />
        )}
      </button>
    </Dropdown>
  );
};

const ButtonText: React.FC<{ text: string }> = ({ text }) => {
  return <span className="w-full text-[12px] font-bold">{text}</span>;
};

const SettingsIcon = () => {
  return (
    <span className="size-[24px] bg-[#45A996] text-white dark:bg-primary-500/40 flex justify-center items-center gap-[10px] rounded-sm">
      <Settings />
    </span>
  );
};

const UserFillIcon = () => {
  return (
    <span className="size-[24px] bg-[#F4FAF9] dark:bg-primary-500/40 flex justify-center items-center rounded-sm">
      <UserFill />
    </span>
  );
};

const SwitchAccountIcon = () => {
  return (
    <span className="size-4 flex justify-center items-center gap-[10px] rounded-sm">
      <SwitchAccount />
    </span>
  );
};

const DisconnectIcon = () => {
  return (
    <span className="size-4 flex justify-center items-center gap-[10px] rounded-sm">
      <Disconnect />
    </span>
  );
};
