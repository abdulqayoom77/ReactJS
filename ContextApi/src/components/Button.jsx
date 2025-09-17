import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Button = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={
        theme === "dark"
          ? "w-20 px-4 py-2 rounded-sm bg-white text-black hover:bg-gray-400"
          : "w-20 px-4 py-2 rounded-sm bg-black text-white hover:bg-gray-900"
      }
    >
      Toggle
    </button>
  );
};

export default Button;
