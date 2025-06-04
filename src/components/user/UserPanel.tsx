import { useSelector } from "react-redux";
import UserButton from "./UserButton";
import UsernameDisplay from "./UsernameDisplay";
import { getUser } from "../../redux/entities/user/slice";

const UserPanel = () => {
  const user = useSelector(getUser);

  return (
    <>
      <UserButton />
      {user && <UsernameDisplay />}
    </>
  );
};

export default UserPanel;
