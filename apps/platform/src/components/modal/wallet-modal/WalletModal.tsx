"use client";
import Modal from "~/components/ui/modal/Modal";
import styles from "./WalletModal.module.scss";
import WalletList from "./stages/wallet-list/WalletList";
import { useTranslations } from "next-intl";
const WalletModal = () => {
  const t = useTranslations("WalletModal");

  return (
    <Modal isOpen={false} onClose={() => {}} title={t("title")}>
      <div className={styles.container}>
        <WalletList />
      </div>
    </Modal>
  );
};

export default WalletModal;
