import Button from "../button/Button";
import ThemeButton from "../theme/ThemeButton";
import UserPanel from "../user/UserPanel";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Button to="/" size="small" variant="link">
          Home
        </Button>
        <Button to="/restaurants" size="small" variant="link">
          Restaurants
        </Button>
      </nav>
      <ThemeButton />
      <UserPanel />
    </header>
  );
};

export default Header;
