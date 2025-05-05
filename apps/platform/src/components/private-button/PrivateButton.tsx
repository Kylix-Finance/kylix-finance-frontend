import { useAccountsStore } from "@repo/shared";
import { Button, ButtonProps } from "../ui/button";
import { MouseEventHandler } from "react";

const PrivateButton = ({ onClick, children, ...rest }: ButtonProps) => {
  const { account, setStage } = useAccountsStore();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (account) {
      onClick?.(e);
    } else {
      setStage("walletsList");
    }
  };

  return (
    <Button {...rest} onClick={handleClick}>
      {account ? children : "Connect Wallet"}
    </Button>
  );
};

export default PrivateButton;
