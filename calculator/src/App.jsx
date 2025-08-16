import React from "react";
import { Calculator } from "./components/Calculator";

const App = () => {
  const calculatorButtons = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];


  return (
    <>

      <h1>Calculator</h1>
      <p>Welcome to the Calculator App!</p>
      <p>Use the buttons below to perform calculations.</p>
      <Calculator calculatorButtons={calculatorButtons} />  
    </>
  );
};

export default App;
