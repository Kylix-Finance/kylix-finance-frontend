import Spinner from "~/components/loaders/spinner/Spinner";
import styles from "./Loading.module.scss";
import { TransactionStage } from "~/types";
import { ReactNode } from "react";
import TokenIcon from "~/components/token-icon";
import CheckCircle from "~/assets/icons/check-circle.svg";
import CircleClose from "~/assets/icons/circle-close.svg";
import { AnimatePresence, motion } from "motion/react";
import { fadeAnimation, framerProps } from "~/animations/variants";
import { UseTransactionResult } from "@repo/onchain";
import { LinkButton } from "~/components/ui/link-button";
import { ENV } from "~/config/env";
interface Props {
  stage: TransactionStage;
  value: string | undefined;
  symbol: string | undefined;
  error: Error | null;
  data?: UseTransactionResult;
}

type StageMessage = {
  title: string;
  description: ReactNode;
  footer?: ReactNode;
};

const Loading = ({ stage, value, symbol, error, data }: Props) => {
  const stageMessages: Record<TransactionStage, StageMessage> = {
    form: {
      title: "Provide Withdraw Details",
      description: (
        <div className={styles.description}>
          Please enter the quantity of tokens you wish to withdraw to the pool.
        </div>
      ),
    },
    ready: {
      title: "Assets Prepared for Withdraw",
      description: (
        <div className={styles.description}>
          Your withdraw request has been configured
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            {value} {symbol}
          </span>
          .
        </div>
      ),
    },
    wallet: {
      title: "Awaiting Wallet Approval",
      description: (
        <div className={styles.description}>
          Authorize this transaction in your wallet to proceed with the withdraw
          of&nbsp;
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            {value} {symbol}
          </span>
          .
        </div>
      ),
      footer: (
        <div className={styles.footerNote}>
          Select "Approve" when the wallet prompt appears.
        </div>
      ),
    },
    broadcast: {
      title: "Transaction Broadcasted",
      description: (
        <div className={styles.description}>
          Your transaction has been successfully broadcast to the network.
        </div>
      ),
    },
    in_block: {
      title: "Transaction Confirmed in Block",
      description: (
        <div className={styles.description}>
          Your transaction has been recorded on the blockchain.
        </div>
      ),
    },
    finalized: {
      title: "Withdraw Successfully Confirmed.",
      description: (
        <div className={styles.description}>
          You successfully supplied&nbsp;
          <span className={styles.token}>
            {symbol && <TokenIcon width={16} height={16} symbol={symbol} />}{" "}
            {value} {symbol}
          </span>
        </div>
      ),
      footer: (
        <div className={styles.footerNote}>
          <LinkButton
            target="_blank"
            href={`https://polkadot.js.org/apps/?rpc=${ENV.RPC_ENDPOINT}#/explorer/query/${data?.blockNumber}`}
          >
            View details
          </LinkButton>
        </div>
      ),
    },
    error: {
      title: error?.name || "Transaction Unsuccessful",
      description: (
        <div className={styles.description}>
          {error?.message ||
            "An unexpected error occurred. Please try again later."}
        </div>
      ),
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        {...framerProps}
        variants={fadeAnimation}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={styles.container}
      >
        {stage === "error" ? (
          <CircleClose width={50} height={50} className={styles.error_icon} />
        ) : stage === "finalized" ? (
          <CheckCircle width={50} height={50} className={styles.success_icon} />
        ) : (
          <Spinner width={50} height={50} borderWidth={4} />
        )}
        <div className={styles.content}>
          <p className={styles.title}>{stageMessages[stage].title}</p>
          {stageMessages[stage].description}
        </div>
        {stageMessages[stage].footer && (
          <div className={styles.footer}>{stageMessages[stage].footer}</div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
