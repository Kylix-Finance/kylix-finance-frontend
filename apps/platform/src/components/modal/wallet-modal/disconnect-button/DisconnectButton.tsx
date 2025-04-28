import { useAccountsStore } from "@repo/shared";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

const DisconnectButton = () => {
  const t = useTranslations("WalletModal");
  const { disconnect } = useAccountsStore();

  return (
    <Button variant="primary" onClick={() => disconnect(null)} fullWidth>
      {t("disconnectButton")}
    </Button>
  );
};

export default DisconnectButton;
