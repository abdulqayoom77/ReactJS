import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const SecTagLine = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <h2 className={isDark ? "text-[#99A1AF] text-xl" : "text-[#737373] text-xl"}>
      {children}
    </h2>
  );
};

export default SecTagLine;
