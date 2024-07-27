"use client";

import { useModalStore } from "../stores/modal";
import { Settings, UserFill } from "./Icons";

const ConnectButton = () => {
  const modalState = useModalStore();

  return (
    <button
      className="shadow-md cursor-pointer transition transform hover:shadow-lg hover:-translate-y-1 active:shadow-md active:translate-y-0 flex justify-between items-center gap-2 h-full p-2 rounded-sm bg-[#FFF] text-[#5C5E64] min-w-[143px] min-h-[40px]"
      onClick={() => modalState.setStatus(true)}
    >
      <span className="size-[24px] bg-[#F4FAF9] flex justify-center items-center gap-[10px] rounded-sm">
        <UserFill />
      </span>

      <span className="font-[500] text-[12px]">Connect wallet</span>

      <span className="size-[24px] bg-[#45A996] flex justify-center items-center gap-[10px] rounded-sm">
        <Settings />
      </span>
    </button>
  );
};

export default ConnectButton;
