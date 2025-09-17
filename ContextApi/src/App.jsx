import React, { useState } from "react";
import Child from "./components/Child";
import ThemeProvider from "./context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  );
};

export default App;
