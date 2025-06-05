import { useSelector } from "react-redux";
import { getUser } from "../../redux/entities/user/slice";

const UsernameDisplay = () => {
  const user = useSelector(getUser);

  return <div className="username">{user?.name}</div>;
};

export default UsernameDisplay;
