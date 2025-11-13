import type { Network } from "~/types";
import styles from "./Network.module.scss";
import TokenIcon from "~/components/token-icon";
import capitalize from "lodash/capitalize";
import Glob from "~/assets/icons/glob.svg";
import { SelectBox } from "~/components/inputs/select-box";

interface Props {
  networks: Map<string, Network>;
  networkKeys: string[];
  isPending?: boolean;
  selectedNetwork: string;
  setSelectedNetwork: (network: string) => void;
}

const Network = ({
  networks,
  isPending,
  selectedNetwork,
  setSelectedNetwork,
  networkKeys,
}: Props) => {
  const renderNetwork = (key: string) => {
    const network = networks.get(key);
    return (
      <div className={styles.selected_network}>
        {key === "none" || isPending ? (
          <Glob className={styles.glob} />
        ) : (
          <TokenIcon height={20} width={20} symbol={key} />
        )}
        {capitalize(network?.name || "All networks")}
      </div>
    );
  };

  return (
    <SelectBox
      options={networkKeys}
      onChange={(value: string) => {
        setSelectedNetwork(value);
      }}
      renderOption={renderNetwork}
      value={selectedNetwork}
      renderValue={renderNetwork}
      className={styles.select}
    />
  );
};

export default Network;
