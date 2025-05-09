import { IconButton } from "~/components/ui/icon-button";
import styles from "./ActionHeader.module.scss";
import { ArrowLeft } from "~/assets/icons";
import ScrollableContainer from "~/components/scrollable-container";
import TokenIcon from "~/components/token-icon";
import Skeleton from "~/components/skeleton";
import { useRouter } from "next/navigation";
interface Data {
  content?: string;
  value?: string;
}

interface Props {
  data: Data[];
  title?: string;
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
            <p>{title}</p>
          </Skeleton>
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
