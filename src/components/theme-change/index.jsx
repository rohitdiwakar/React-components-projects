// import React from "react";
import UseLocalStroage from "./useLocalStroage";
import './theme.css'
const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStroage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>hello world</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
