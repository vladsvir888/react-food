import ThemeButton from "../theme/ThemeButton";
import UserPanel from "../user/UserPanel";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeButton />
      <UserPanel />
    </header>
  );
};

export default Header;
