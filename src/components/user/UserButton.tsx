import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import { login, logout, selectUser } from "../../redux/entities/user/slice";

const UserButton = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const text = user ? "Выйти" : "Войти";
  const handleClick = user ? logout : login;

  return <Button onClick={() => dispatch(handleClick())}>{text}</Button>;
};

export default UserButton;
