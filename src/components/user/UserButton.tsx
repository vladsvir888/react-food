import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import { login, logout, selectUser } from "../../redux/entities/user/slice";
import { useGetUsersQuery } from "../../redux/api";

const UserButton = () => {
  const { data: users } = useGetUsersQuery();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const text = user ? "Выйти" : "Войти";
  const handleClick = user ? logout : login;

  if (!users?.length) {
    return null;
  }

  return (
    <Button onClick={() => dispatch(handleClick(users[0]))}>{text}</Button>
  );
};

export default UserButton;
