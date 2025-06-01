import UserButton from "./UserButton";
import { useUserContext } from "./UserContext";
import UsernameDisplay from "./UsernameDisplay";

const UserPanel = () => {
  const { user, login, logout } = useUserContext();
  const textUserButton = user ? "Выйти" : "Войти";
  const handleUser = user ? logout : login;

  return (
    <>
      <UserButton text={textUserButton} onClick={handleUser} />
      {user && <UsernameDisplay />}
    </>
  );
};

export default UserPanel;
