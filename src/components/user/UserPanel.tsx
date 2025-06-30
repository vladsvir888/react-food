"use client";

import { useSelector } from "react-redux";
import UserButton from "./UserButton";
import UsernameDisplay from "./UsernameDisplay";
import { selectUser } from "../../redux/entities/user/slice";

const UserPanel = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <UserButton />
      {user && <UsernameDisplay />}
    </>
  );
};

export default UserPanel;
