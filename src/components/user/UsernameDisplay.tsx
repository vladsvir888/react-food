import { useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";

const UsernameDisplay = () => {
  const user = useSelector(selectUser);

  return <div className="username">{user?.name}</div>;
};

export default UsernameDisplay;
