import { Buttons } from "./Buttons";

export const Calculator = ({ calculatorButtons }) => {
  return (
    <div className="calculator">
      <input type="number" placeholder="Enter Value to calculate" id="input" />

      <Buttons calculatorButtons={calculatorButtons} />
    </div>
  );
};
