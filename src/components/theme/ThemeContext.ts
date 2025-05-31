import { createContext, useContext } from "react";
import type { ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useThemeContext must be used within a Provider");
  }

  return themeContext;
};
