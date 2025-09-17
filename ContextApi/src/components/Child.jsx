import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Button from "./Button";

const Child = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-black text-white text-red flex items-center gap-5 justify-center h-[100vh] w-[100vw] flex-col"
          : "bg-white text-black flex items-center gap-5 justify-center h-[100vh] w-[100vw] flex-col"
      }
    >
      <h2 className="text-2xl font-semibold">Theme : {theme}</h2>
      <Button />
    </div>
  );
};

export default Child;
