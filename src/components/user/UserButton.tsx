import Button from "../button/Button";

type Props = {
  text: string;
  onClick: () => void;
};

const UserButton = ({ text, onClick }: Props) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default UserButton;
