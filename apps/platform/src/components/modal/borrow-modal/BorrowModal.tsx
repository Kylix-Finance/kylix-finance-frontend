import Modal from "~/components/ui/modal/Modal";
import { TransactionStage, VoidFunction } from "~/types";
import Form from "./form/Form";

import { useAccountsStore } from "@repo/shared";
import { useEffect, useState } from "react";
import Loading from "./loading/Loading";
import styles from "./BorrowModal.module.scss";
interface Props {
  assetId: number;
  onClose: VoidFunction;
}

const BorrowModal = ({ assetId, onClose }: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [stage, setStage] = useState<TransactionStage>("form");
  const { account } = useAccountsStore();

  useEffect(() => {
    if (!assetId || !account) {
      onClose();
    }
  }, [account, assetId, onClose]);

  const handleClick = () => {};

  const onInputValueChange = async (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal
      isOpen={!!assetId}
      onClose={onClose}
      title={stage === "form" ? "You’re borrowing" : undefined}
    >
      <div className={styles.container}>
        {stage === "form" ? (
          <Form
            isLoading={false}
            value={value}
            onInputChange={onInputValueChange}
            asset={undefined}
            formattedBalance={undefined}
            onButtonClick={handleClick}
            isButtonLoading={false}
            assetPrice={undefined}
            assetDecimal={undefined}
            disabled={false}
            realBalance={undefined}
          />
        ) : (
          <Loading
            stage={stage}
            value={value}
            symbol={undefined}
            error={null}
            data={undefined}
          />
        )}
      </div>
    </Modal>
  );
};

export default BorrowModal;
