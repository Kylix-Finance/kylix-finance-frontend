"use client";
import Modal from "~/components/ui/modal/Modal";
import styles from "./WalletModal.module.scss";
import WalletList from "./stages/wallet-list/WalletList";
import { useTranslations } from "next-intl";
import { useModalStore } from "~/stores/modal";
import AccountList from "./stages/account-list/AccountList";
import { useAccountsStore } from "@repo/shared";
const WalletModal = () => {
  const t = useTranslations("WalletModal");
  const { stage, setStage, isOpen, setIsOpen } = useModalStore();
  const { disconnect } = useAccountsStore();
  const handleBackButtonClick = () => {
    disconnect();
    setStage("walletsList");
  };
  return (
    <Modal
      onBackButtonClick={
        stage === "accountsList" ? handleBackButtonClick : undefined
      }
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={t("title")}
    >
      <div className={styles.container}>
        {stage === "walletsList" && <WalletList />}
        {stage === "accountsList" && <AccountList />}
      </div>
    </Modal>
  );
};

export default WalletModal;
