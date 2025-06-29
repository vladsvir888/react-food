"use client";

import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./types";
import { themeKeyLS } from "./const";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(themeKeyLS, newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = (localStorage.getItem(themeKeyLS) as Theme) || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
