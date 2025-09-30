import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const SecHeading = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const headingStyle = isDark
    ? "text-2xl lg:text-4xl md:text-2xl font-bold bg-gradient-to-r from-[#535353] to-[#d3d3d3] text-transparent bg-clip-text cursor-pointer overflow-hidden"
    : "text-2xl lg:text-4xl md:text-2xl font-bold text-black cursor-pointer overflow-hidden";

  return <h1 className={headingStyle}>{children}</h1>;
};

export default SecHeading;
