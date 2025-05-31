import { useUserContext } from "./UserContext";

const UsernameDisplay = () => {
  const { user } = useUserContext();

  return <div className="username">{user?.name}</div>;
};

export default UsernameDisplay;
