import { useAccountsStore } from "@repo/shared";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

const DisconnectButton = () => {
  const t = useTranslations("WalletModal");
  const { disconnect } = useAccountsStore();
  const handleClick = () => {
    disconnect();
  };
  return (
    <Button variant="primary" onClick={handleClick} fullWidth>
      {t("disconnectButton")}
    </Button>
  );
};

export default DisconnectButton;
