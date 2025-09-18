import { createContext, useState } from "react";

export const SettingContext = createContext();

export const SettingProvider = ({children}) => {
  const [settings, setSettings] = useState({
    theme: "light",
    fontSize: "16px",
  });
  const updateSettings = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };
  return (
    <SettingContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingContext.Provider>
  );
};
