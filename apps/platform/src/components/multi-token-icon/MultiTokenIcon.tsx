import TokenIcon from "../token-icon";
import { TokenIconProps } from "~/types";
import styles from "./MultiTokenIcon.module.scss";
interface Props extends Omit<TokenIconProps, "symbol"> {
  symbol: [string, string];
}

export const MultiTokenIcon = ({ symbol, height = 32, width = 32 }: Props) => {
  return (
    <div className={styles.container} style={{ paddingRight: width / 2 }}>
      <TokenIcon
        symbol={symbol[0]}
        width={height}
        height={width}
        className={styles.first_icon}
      />
      <TokenIcon
        symbol={symbol[1]}
        width={height}
        height={width}
        className={styles.second_icon}
      />
    </div>
  );
};
