"use client";
import { IconButton } from "~/components/ui/icon-button";
import styles from "./ActionHeader.module.scss";
import { ArrowLeft } from "~/assets/icons";
import ScrollableContainer from "~/components/scrollable-container";
import Skeleton from "~/components/skeleton";
import { useRouter } from "next/navigation";
import MultiTokenIcon from "~/components/multi-token-icon";
interface Data {
  content?: string;
  value?: string;
}

interface Props {
  data: Data[];
  symbol?: [string, string];
  backLinkHref?: string;
  isLoading?: boolean;
}

const ActionHeader = ({ data, symbol, backLinkHref, isLoading }: Props) => {
  const router = useRouter();

  const backClickHandler = () => {
    if (backLinkHref) {
      router.push(backLinkHref);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <IconButton icon={ArrowLeft} onClick={backClickHandler} />
        <div className={styles.title_wrapper}>
          <Skeleton isLoading={isLoading} circle width={40} height={40}>
            {symbol && (
              <MultiTokenIcon symbol={symbol} width={40} height={40} />
            )}
          </Skeleton>
          <div className={styles.title}>
            Bid for liquidated{" "}
            <Skeleton isLoading={isLoading} width={80} height={40}>
              <span className={styles.symbol}>{symbol?.[0]}</span>
            </Skeleton>{" "}
            using
            <Skeleton isLoading={isLoading} width={80} height={40}>
              <span className={styles.symbol}>{symbol?.[1]}</span>
            </Skeleton>
          </div>
        </div>
      </div>
      <ScrollableContainer>
        {data.map((item, index) => (
          <div key={index} className={styles.action_wrapper}>
            <div className={styles.label}>{item.content}</div>
            <Skeleton isLoading={isLoading} className={styles.skeleton} rounded>
              <div className={styles.content}>{item.value}</div>
            </Skeleton>
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
};

export default ActionHeader;
