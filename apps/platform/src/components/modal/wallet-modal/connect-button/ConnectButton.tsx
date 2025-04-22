import { Button } from "~/components/ui/button";
import { useTranslations } from "next-intl";
import { useWalletModal } from "~/store/wallet-modal";
const ConnectButton = () => {
  const t = useTranslations("WalletModal");
  const { setIsOpen, account, setStage } = useWalletModal();
  const handleClick = () => {
    if (!account.selected && !account.list) {
      setStage("walletsList");
    }
    if (!account.selected && account.list) {
      setStage("accountsList");
    }
    if (account.selected && account.list) {
      setStage("switchAccount");
    }
    setIsOpen(true);
  };
  return (
    <Button onClick={handleClick}>
      {account.selected ? account.trimmedSelected : t("connectButton")}
    </Button>
  );
};

export default ConnectButton;
