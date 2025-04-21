import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

const DisconnectButton = () => {
  const t = useTranslations("WalletModal");

  return <Button variant="tertiary">{t("disconnectButton")}</Button>;
};

export default DisconnectButton;
