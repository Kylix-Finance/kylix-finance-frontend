import { Button } from "~/components/ui/button";
import { useTranslations } from "next-intl";
import { useAccountsStore } from "@repo/shared";
const ConnectButton = () => {
  const { setStage } = useAccountsStore();
  const t = useTranslations("WalletModal");
  const handleClick = () => {
    setStage("walletsList");
  };
  return <Button onClick={handleClick}>{t("connectButton")}</Button>;
};

export default ConnectButton;
