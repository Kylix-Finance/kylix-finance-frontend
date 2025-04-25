"use client";
import Modal from "~/components/ui/modal/Modal";
import styles from "./WalletModal.module.scss";
import WalletList from "./stages/wallet-list/WalletList";
import { useTranslations } from "next-intl";
import AccountList from "./stages/account-list/AccountList";
import { useAccountsStore } from "@repo/shared";
import DisconnectButton from "./disconnect-button/DisconnectButton";
const WalletModal = () => {
  const t = useTranslations("WalletModal");
  const { disconnect, stage, setStage } = useAccountsStore();
  const handleBackButtonClick = () => {
    disconnect("walletsList");
  };
  return (
    <Modal
      onBackButtonClick={
        stage === "accountsList" ? handleBackButtonClick : undefined
      }
      isOpen={!!stage}
      onClose={() => setStage(null)}
      title={t("title")}
      footer={stage === "accountsList" && <DisconnectButton />}
    >
      <div className={styles.container}>
        {stage === "walletsList" && <WalletList />}
        {stage === "accountsList" && <AccountList />}
      </div>
    </Modal>
  );
};

export default WalletModal;
