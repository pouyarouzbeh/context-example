import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      حالت فعلی: {theme} - تغییر بده
    </button>
  );
};

export default ThemeToggler;