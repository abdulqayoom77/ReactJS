import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import HeroSlider from "./components/Slider";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Section2 from "./sections/home/Section2";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Nav1 func={logout} />
          <Nav2 />
          <HeroSlider />
          <Section2 />
        </>
      ) : (
        <Login onLogin={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
