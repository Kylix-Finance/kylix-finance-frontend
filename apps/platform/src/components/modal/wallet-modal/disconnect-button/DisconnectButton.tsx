import { useAccountsStore } from "@repo/shared";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { useModalStore } from "~/stores/modal";

const DisconnectButton = () => {
  const t = useTranslations("WalletModal");
  const { disconnect } = useAccountsStore();
  const { setStage } = useModalStore();
  const handleClick = () => {
    disconnect();
    setStage("walletsList");
  };
  return (
    <Button variant="primary" onClick={handleClick} fullWidth>
      {t("disconnectButton")}
    </Button>
  );
};

export default DisconnectButton;
