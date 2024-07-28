"use client";
import { Modal } from "react-responsive-modal";
import { useDialogState } from "~/hooks";

export const UserBalance = () => {
  const dialogState = useDialogState("userBalance");

  return (
    <Modal
      open={dialogState.isOpen}
      center
      onClose={dialogState.close}
      classNames={{
        root: "!z-[999999999]",
        closeButton: "bg-red-500",
        closeIcon: "stroke-none fill-[#9FAAA8] w-4 h-4",
        modal: "rounded-lg bg-red-500 p-4 lg:min-w-[30%] w-[450px] h-[450px]",
      }}
    >
      <h2 className="font-bold text-sm leading-5 text-center text-[#383E42] mb-2">
        Account detail
      </h2>
    </Modal>
  );
};
