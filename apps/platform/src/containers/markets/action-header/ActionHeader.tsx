import { IconButton } from "~/components/ui/icon-button";
import styles from "./ActionHeader.module.scss";
import { ArrowLeft } from "~/assets/icons";
import ScrollableContainer from "~/components/ScrollableContainer/ScrollableContainer";
import TokenIcon from "~/components/token-icon";
import Skeleton from "~/components/skeleton";
import { useRouter } from "next/navigation";
interface Content {
  content?: string;
  isLoading?: boolean;
}
interface Data extends Content {
  value?: string;
}

interface Props {
  data: Data[];
  title: Content;
  symbol?: Content;
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
          <Skeleton isLoading={symbol?.isLoading} circle width={40} height={40}>
            {symbol?.content && (
              <TokenIcon symbol={symbol?.content} width={40} height={40} />
            )}
          </Skeleton>
          <Skeleton isLoading={title.isLoading} rounded width={100}>
            <p>{title.content}</p>
          </Skeleton>
        </div>
      </div>
      <ScrollableContainer>
        {data.map((item, index) => (
          <div key={index} className={styles.action_wrapper}>
            <div className={styles.label}>{item.content}</div>
            <Skeleton
              isLoading={item.isLoading}
              className={styles.skeleton}
              rounded
            >
              <div className={styles.content}>{item.value}</div>
            </Skeleton>
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
};

export default ActionHeader;
