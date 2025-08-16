import React from "react";
import Input from "./Input";
import { Buttons } from "./Buttons";

export const Calculator = ({ calculatorButtons }) => {

  return (
    <div className="calculator">
      <Input />
      <Buttons calculatorButtons={calculatorButtons} />
    </div>
  );
};
