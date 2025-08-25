import React from "react";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode ? "Light" : "Dark");
  };
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        padding: "2rem",
      }}
    >
      <button onClick={toggleMode} className={darkMode ? "bg-white text-black px-4 py-2 rounded-sm" : "bg-gray-900 text-white px-4 py-2 rounded-sm"}>Toggle {darkMode ? "Light" : "Dark"}</button>
    </div>
  );
};

export default App;
