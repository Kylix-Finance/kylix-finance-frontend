import User from "~/assets/icons/user.svg";
import styles from "./Avatar.module.scss";

type AvatarProps = {
  size?: "large" | "small";
};

export const Avatar = ({ size = "small" }: AvatarProps) => {
  return (
    <div className={styles.avatar} data-size={size}>
      <User className={styles.icon} />
      <div className={styles.badge}></div>
    </div>
  );
};
