import ThemeButton from "../theme/ThemeButton";
import { useUserContext } from "../user/UserContext";
import UserButton from "../user/UserButton";
import UsernameDisplay from "../user/UsernameDisplay";
import styles from "./header.module.css";

const Header = () => {
  const { user, login, logout } = useUserContext();
  const textUserButton = user ? "Выйти" : "Войти";
  const handleUser = user ? logout : login;

  return (
    <header className={styles.header}>
      <ThemeButton />
      <UserButton text={textUserButton} onClick={handleUser} />
      {user && <UsernameDisplay />}
    </header>
  );
};

export default Header;
