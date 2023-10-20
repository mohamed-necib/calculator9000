import sun from "../assets/sun.png";
import moon from "../assets/lune.png";
import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";

const ToggleTheme = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="toggle-theme-btn">
      <span>Go {darkMode ? "Light" : "Dark"}</span>
      <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  );
};

export default ToggleTheme;
