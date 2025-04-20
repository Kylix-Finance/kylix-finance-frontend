import { Logo } from "~/assets/svgs";
import styles from "./Sidebar.module.scss";
import Home from "~/assets/icons/home";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo className={styles.logo} />
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
            <li>
              {" "}
              <Home className={styles.icon} /> Dashboard
            </li>
            <li>Settings</li>
            <li>Profile</li>
            <li>Notifications</li>
            <li>Help</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
