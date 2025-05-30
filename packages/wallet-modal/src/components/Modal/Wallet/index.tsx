"use client";
import { Modal as ModalBase, ModalProps } from "react-responsive-modal";
import { ModalStore, useModalStore } from "../../../stores/modal";
import WalletsList from "./WalletsList";
import AccountList from "./AccountList";
import { useStatusStore } from "../../../stores";
import { STATUS } from "../../../constants";
import SwitchAccount from "./SwitchAccount";

type Stages = Record<
  ModalStore["stage"],
  {
    title: string;
    Component: React.FC;
  }
>;

type Props = Omit<ModalProps, "onClose" | "close" | "open">;

export const WalletModal: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen, setStage, stage } = useModalStore();

  const { setStatus } = useStatusStore();
  const modalCloseHandler = () => {
    setIsOpen(false);
    setStatus(STATUS.CANCELED);
    setTimeout(() => {
      setStage("walletsList");
    }, 200);
  };

  const stages: Stages = {
    walletsList: { title: "Connect Your Wallet", Component: WalletsList },
    accountsList: { title: "Choose your account", Component: AccountList },
    switchAccount: { title: "Change your account", Component: SwitchAccount },
  };

  const currentStage = stages[stage];

  return (
    <ModalBase
      {...props}
      open={isOpen}
      onClose={modalCloseHandler}
      classNames={{
        root: "!z-[999999999]",
        closeIcon: "stroke-none fill-[#9FAAA8] dark:fill-primary-100 w-4 h-4",
        modal:
          "rounded-lg p-4 lg:min-w-[30%] w-[450px] h-[450px] bg-white dark:bg-black-500",
      }}
    >
      <h2 className="font-bold text-sm leading-5 text-center text-[#383E42] mb-2 dark:text-primary-100">
        Connect Your Wallet
      </h2>
      {<currentStage.Component />}
    </ModalBase>
  );
};
