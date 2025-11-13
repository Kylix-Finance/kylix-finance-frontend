import { Button } from "~/components/ui/button";
import { useAccountsStore } from "@repo/shared";
interface Props {
  content?: string;
}
const ConnectButton = ({ content = "Connect" }: Props) => {
  const { setStage } = useAccountsStore();
  const handleClick = () => {
    setStage("walletsList");
  };
  return <Button onClick={handleClick}>{content}</Button>;
};

export default ConnectButton;
