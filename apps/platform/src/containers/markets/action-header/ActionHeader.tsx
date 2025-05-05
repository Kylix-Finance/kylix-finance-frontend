import { IconButton } from "~/components/ui/icon-button";
import styles from "./ActionHeader.module.scss";
import { ArrowLeft } from "~/assets/icons";
import ScrollableContainer from "~/components/ScrollableContainer/ScrollableContainer";
import TokenIcon from "~/components/token-icon";
import Link from "next/link";

interface Data {
  title: string;
  value?: string;
}

interface Props {
  data: Data[];
  title: string;
  symbol: string;
  backLinkHref?: string;
}

const ActionHeader = ({ data, symbol, title, backLinkHref = "/" }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link href={backLinkHref}>
          <IconButton icon={ArrowLeft} />
        </Link>
        <div className={styles.title_wrapper}>
          <TokenIcon symbol={symbol} width={40} height={40} />
          <p>{title}</p>
        </div>
      </div>
      <ScrollableContainer>
        {data.map((item, index) => (
          <div key={index} className={styles.action_wrapper}>
            <div className={styles.label}>{item.title}</div>
            <div className={styles.content}>{item.value}</div>
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
};

export default ActionHeader;
