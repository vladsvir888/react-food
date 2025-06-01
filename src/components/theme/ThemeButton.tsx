import Button from "../button/Button";
import { useThemeContext } from "./ThemeContext";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();
  const icon = theme === "light" ? <SunIcon /> : <MoonIcon />;

  return (
    <Button
      icon={icon}
      variant="secondary"
      size="small"
      title="Toggle theme"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
