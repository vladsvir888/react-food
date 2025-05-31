import { useState } from "react";
import type { User } from "./types";
import { UserContext } from "./UserContext";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => setUser({ name: "Test" });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
