import React, { useContext } from "react";
import { SettingContext } from "../context/SettingContext";

const SettingPanel = () => {
  const { settings, updateSettings } = useContext(SettingContext);

  return (
    <div>
      <h2>Settings</h2>
      <button
      className="cursor-pointer px-4 py-2 bg-black rounded-md text-white"

        onClick={() =>
          updateSettings("theme", settings.theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
      <button
      className="cursor-pointer px-4 py-2 bg-black rounded-md text-white"

      onClick={() =>
        updateSettings("fontSize", settings.fontSize === "16px" ? "20px" : "16px")
      }
      >Toggle Font Size</button>
    </div>
  );
};

export default SettingPanel;
