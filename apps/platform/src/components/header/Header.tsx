import Avatar from "~/components/avatar";
import styles from "./Header.module.scss";
import { IconButton } from "../ui/icon-button";
import Bell from "~/assets/icons/bell";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button>Claim &lt; 0.12</Button>
      <IconButton icon={Bell} />
      <Avatar />
      <span>0x1c4d...20Ce</span>
    </header>
  );
};
