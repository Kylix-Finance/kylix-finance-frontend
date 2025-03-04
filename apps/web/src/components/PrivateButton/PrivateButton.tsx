import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useActiveAccount } from "@repo/onchain-utils";
import { useModalStore } from "@repo/wallet-modal";
import React, { MouseEvent } from "react";

interface Props extends LoadingButtonProps {}

const PrivateButton = ({ children, ...rest }: Props) => {
  const modalStore = useModalStore();
  const { activeAccount } = useActiveAccount();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (activeAccount?.address && rest.onClick) {
      rest.onClick(event);
    } else {
      modalStore.setIsOpen(true);
    }
  };

  return (
    <LoadingButton {...rest} onClick={handleClick}>
      {activeAccount?.address ? children : "Connect your wallet"}
    </LoadingButton>
  );
};

export default PrivateButton;
