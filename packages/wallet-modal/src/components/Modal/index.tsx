"use client";
import { Modal as ModalBase, ModalProps } from "react-responsive-modal";
import { ModalStore, useModalStore } from "../../stores/modal";
import WalletsList from "./WalletsList";
import AccountList from "./AccountList";
import { useStatusStore } from "../../stores";
import { STATUS } from "../../constants";
import SwitchAccount from "./SwitchAccount";

type Stages = Record<
  ModalStore["stage"],
  {
    title: string;
    Component: React.FC;
  }
>;

const WalletModal = ({
  ...rest
}: Omit<ModalProps, "onClose" | "close" | "open">) => {
  const {
    setStatus: setModalStatus,
    stage,
    status,
    setStage,
  } = useModalStore();

  const { setStatus } = useStatusStore();
  const modalCloseHandler = () => {
    setModalStatus(false);
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
      {...rest}
      open={status}
      onClose={modalCloseHandler}
      classNames={{
        root: "!z-[999999999]",
        closeButton: "bg-red-500",
        closeIcon: "stroke-none fill-[#9FAAA8] w-4 h-4",
        modal: "rounded-lg bg-red-500 p-4 lg:min-w-[30%] w-[450px] h-[450px]",
      }}
    >
      <h2 className="font-bold text-sm leading-5 text-center text-[#383E42] mb-2">
        {currentStage.title}
      </h2>
      {<currentStage.Component />}
    </ModalBase>
  );
};

export default WalletModal;
