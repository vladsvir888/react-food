import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import { getUser, login, logout } from "../../redux/entities/user/slice";

const UserButton = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const text = user ? "Выйти" : "Войти";
  const handleClick = user ? logout : login;

  return <Button onClick={() => dispatch(handleClick())}>{text}</Button>;
};

export default UserButton;
