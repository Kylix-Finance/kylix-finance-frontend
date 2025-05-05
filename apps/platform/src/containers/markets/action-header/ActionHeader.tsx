import { IconButton } from "~/components/ui/icon-button";
import styles from "./ActionHeader.module.scss";
import { ArrowLeft } from "~/assets/icons";
import ScrollableContainer from "~/components/ScrollableContainer/ScrollableContainer";
import TokenIcon from "~/components/token-icon";

interface Props {
  data: any;
}

const ActionHeader = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <IconButton icon={ArrowLeft} />
        <div className={styles.title_wrapper}>
          <TokenIcon symbol="BTC" width={40} height={40} />
          <p>Bid for liquidated BTC using USDC</p>
        </div>
      </div>
      <ScrollableContainer>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div key={index} className={styles.action_wrapper}>
            <div className={styles.label}>hello world</div>
            <div className={styles.content}>$ 24.67M</div>
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
};

export default ActionHeader;
