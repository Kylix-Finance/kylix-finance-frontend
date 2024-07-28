"use client";

import { useModalStore } from "../stores/modal";
import { Settings, UserFill } from "./Icons";

interface Props {
  address: string | undefined;
  onClickWhenConnected?: VoidFunction;
}

export const ConnectButton: React.FC<Props> = ({
  address,
  onClickWhenConnected,
}) => {
  const modalState = useModalStore();

  const handleOpenWalletModal = () => modalState.setStatus(true);

  const currentHandler = address ? onClickWhenConnected : handleOpenWalletModal;

  return (
    <button
      className="select-none shadow-md cursor-pointer transition transform hover:shadow-lg hover:-translate-y-1 active:shadow-md active:translate-y-0 flex justify-between items-center gap-2 p-2 rounded-sm bg-[#FFF] text-[#5C5E64] w-[143px] h-[40px]"
      onClick={currentHandler}
    >
      {address ? (
        <>
          <span className="size-[24px] bg-[#F4FAF9] flex justify-center items-center gap-[10px] rounded-sm">
            <UserFill />
          </span>

          <span className="w-[63px]">
            <ButtonText
              text={`${address.slice(0, 3)}...${address.slice(-4, -1)}`}
            />
          </span>

          <span className="size-[24px] bg-[#45A996] flex justify-center items-center gap-[10px] rounded-sm">
            <Settings />
          </span>
        </>
      ) : (
        <ButtonText text="Connect Wallet" />
      )}
    </button>
  );
};

export const ButtonText: React.FC<{ text: string }> = ({ text }) => {
  return <span className="font-[500] w-full text-[12px]">{text}</span>;
};
