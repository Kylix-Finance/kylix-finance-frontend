"use client";
import Modal from "~/components/ui/modal/Modal";
import styles from "./WalletModal.module.scss";
import { useWalletModal } from "~/store/wallet-modal";
import { useTranslations } from "next-intl";
const WalletModal = () => {
  const { modal, setIsOpen } = useWalletModal();
  const t = useTranslations("WalletModal");

  return (
    <Modal
      isOpen={modal.isOpen}
      onClose={() => setIsOpen(false)}
      title={t("title")}
    >
      <div className={styles.container}></div>
    </Modal>
  );
};

export default WalletModal;
