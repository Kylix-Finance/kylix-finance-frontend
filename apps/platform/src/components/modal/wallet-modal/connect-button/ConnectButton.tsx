import { Button } from "~/components/ui/button";
import { useTranslations } from "next-intl";
import { useModalStore } from "~/stores/modal";
const ConnectButton = () => {
  const { setIsOpen } = useModalStore();
  const t = useTranslations("WalletModal");
  const handleClick = () => {
    setIsOpen(true);
  };
  return <Button onClick={handleClick}>{t("connectButton")}</Button>;
};

export default ConnectButton;
