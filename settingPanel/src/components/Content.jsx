import React, { useContext } from "react";
import { SettingContext } from "../context/SettingContext";

const Content = () => {
  const { settings } = useContext(SettingContext);

  return (
    <p className="p-4" style={{ fontSize: settings.fontSize }}>
      Current Theme : {settings.theme} | Font Size : {settings.fontSize}
    </p>
  );
};

export default Content;
