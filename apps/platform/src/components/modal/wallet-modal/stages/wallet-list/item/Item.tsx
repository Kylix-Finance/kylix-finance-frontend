import { WalletProviderDetails } from "~/types/wallets";
import styles from "./Item.module.scss";
import Image from "next/image";
import { IconButton } from "~/components/ui/icon-button";
import Download from "~/assets/icons/download.svg";
const Item = ({
  image,
  extension,
  id,
  isInstalled,
  name,
}: WalletProviderDetails) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          width={40}
          height={40}
          src={image}
          alt={`${name} wallet icon`}
          quality={100}
        />
        <p>{name}</p>
      </div>
      <IconButton icon={Download} />
    </div>
  );
};

export default Item;
