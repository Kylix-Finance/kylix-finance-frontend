"use client";
import { IconButton } from "~/components/ui/icon-button";
import styles from "./ActionHeader.module.scss";
import { ArrowLeft } from "~/assets/icons";
import TokenIcon from "~/components/token-icon";
import Skeleton from "~/components/skeleton";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import StatsBar from "~/components/stats-bar";
interface Data {
  content?: string;
  value?: string;
}

interface Props {
  data: Data[];
  title?: string | ReactNode;
  symbol?: string;
  backLinkHref?: string;
  isLoading?: boolean;
}

const ActionHeader = ({
  data,
  symbol,
  title,
  backLinkHref,
  isLoading,
}: Props) => {
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
            {symbol && <TokenIcon symbol={symbol} width={40} height={40} />}
          </Skeleton>
          <Skeleton isLoading={isLoading} rounded width={100}>
            {typeof title === "string" ? <p>{title}</p> : title}
          </Skeleton>
        </div>
      </div>
      <StatsBar data={data} isLoading={isLoading} />
    </div>
  );
};

export default ActionHeader;
