import { WalletProviderDetails } from "~/types/wallets";
import styles from "./Item.module.scss";
import Image from "next/image";
import Download from "~/assets/icons/download.svg";
import { useConfig } from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import { notify } from "~/components/ui/alert";
const Item = ({
  image,
  extension,
  id,
  isInstalled,
  name,
  website,
}: WalletProviderDetails) => {
  const { data } = useConfig();
  const enabled = typeof extension?.enable === "function" && !!data?.dappName;
  const { connect } = useAccountsStore();
  const handleClick = async () => {
    if (isInstalled) {
      if (enabled) {
        try {
          const request = await extension.enable?.(data.dappName);
          const accounts = await request?.accounts.get();
          if (accounts) {
            connect(id, accounts);
          } else {
            throw Error("No accounts found for this wallet");
          }
        } catch (error: unknown) {
          notify({
            mode: "error",
            title: "Connection Failed",
            message:
              error instanceof Error ? error.message : "Unknown error occurred",
          });
        }
      }
    } else {
      window.open(website, "_blank");
    }
  };
  return (
    <button
      onClick={handleClick}
      className={styles.container}
      disabled={!enabled && isInstalled}
    >
      <div className={styles.information}>
        <Image
          width={40}
          height={40}
          src={image}
          alt={`${name} wallet icon`}
          quality={100}
        />
        <p>{name}</p>
      </div>
      {!isInstalled && <Download className={styles.download_icon} />}
    </button>
  );
};

export default Item;
