import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: "1rem",
    marginTop: "1rem",
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return <div style={style}>این متن با تم {theme} نمایش داده شده.</div>;
};

export default Content;