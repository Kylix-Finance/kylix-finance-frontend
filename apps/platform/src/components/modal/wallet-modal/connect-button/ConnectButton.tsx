import { Button } from "~/components/ui/button";
import { useAccountsStore } from "@repo/shared";
const ConnectButton = () => {
  const { setStage } = useAccountsStore();
  const handleClick = () => {
    setStage("walletsList");
  };
  return <Button onClick={handleClick}>Connect</Button>;
};

export default ConnectButton;
