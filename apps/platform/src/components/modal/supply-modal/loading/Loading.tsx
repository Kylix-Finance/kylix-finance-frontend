import Spinner from "~/components/loaders/spinner/Spinner";
import styles from "./Loading.module.scss";
import { TransactionStage } from "~/types";
import { ReactNode } from "react";
import TokenIcon from "~/components/token-icon";
import CheckCircle from "~/assets/icons/check-circle.svg";
import CircleClose from "~/assets/icons/circle-close.svg";
interface Props {
  stage: TransactionStage;
  value: string | undefined;
  symbol: string | undefined;
  error: Error | null;
}
type StageMessage = {
  title: string;
  description: ReactNode;
  footer: ReactNode;
};

const Loading = ({ stage, value, symbol, error }: Props) => {
  const stageMessages: Record<TransactionStage, StageMessage> = {
    ready: {
      title: "Your transaction is ready",
      description: (
        <div className={styles.description}>
          You successfully supplied{" "}
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            <span className={styles.value}>
              {value} {symbol}
            </span>
          </span>
        </div>
      ),
      footer: undefined,
    },
    broadcast: {
      title: "Your transaction is broadcasted",
      description: (
        <div className={styles.description}>
          You successfully supplied{" "}
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            <span className={styles.value}>
              {value} {symbol}
            </span>
          </span>
        </div>
      ),
      footer: undefined,
    },
    in_block: {
      title: "Your transaction is in block",
      description: (
        <div className={styles.description}>
          You successfully supplied{" "}
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            <span className={styles.value}>
              {value} {symbol}
            </span>
          </span>
        </div>
      ),
      footer: undefined,
    },
    finalized: {
      title: "Your supply was successful",
      description: (
        <div className={styles.description}>
          You successfully supplied{" "}
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            <span className={styles.value}>
              {value} {symbol}
            </span>
          </span>
        </div>
      ),
      footer: <div></div>,
    },
    wallet: {
      title: "Confirm on your wallet",
      footer: "Proceed in your wallet",
      description: (
        <div className={styles.description}>
          Confirm you supply of{" "}
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            <span className={styles.value}>
              {value} {symbol}
            </span>
          </span>
        </div>
      ),
    },
    form: {
      title: "",
      description: undefined,
      footer: undefined,
    },
    error: {
      title: error?.name || "Transaction Failed",
      description: error?.message || "",
      footer: undefined,
    },
  };
  return (
    <div className={styles.container}>
      {stage === "error" ? (
        <CircleClose width={50} height={50} className={styles.error_icon} />
      ) : stage === "finalized" ? (
        <CheckCircle className={styles.success_icon} width={50} height={50} />
      ) : (
        <Spinner width={50} height={50} borderWidth={4} />
      )}
      <div className={styles.content}>
        <p className={styles.title}>{stageMessages[stage].title}</p>
        <div className={styles.description}>
          {stageMessages[stage].description}
        </div>
      </div>
      <div className={styles.footer}>
        <div>{stageMessages[stage].footer}</div>
      </div>
    </div>
  );
};

export default Loading;
