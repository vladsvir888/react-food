import { createContext, useContext } from "react";
import type { UserContextType } from "./types";

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("useUserContext must be used within a Provider");
  }

  return userContext;
};
