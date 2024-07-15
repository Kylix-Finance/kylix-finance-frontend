"use client"

import { useModalStore } from "../stores/modal";

const Button = () => {
  const modalState = useModalStore()
  console.log("MODAL", modalState.status);

  return <button className="p-8 bg-primary-500" onClick={() => modalState.setStatus(true)}>
    Connect wallet
  </button>;
};
export default Button;
