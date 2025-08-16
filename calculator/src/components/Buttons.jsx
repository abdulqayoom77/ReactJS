import React from "react";

export const Buttons = ({calculatorButtons}) => {
  const handleButtonClick = (value) => {
    console.log(`Button clicked: ${value}`);
    // Add logic to handle button clicks
  };

  return (
    <div className="calcBtns">
      {calculatorButtons.map((button) => (
        <button key={button} onClick={() => handleButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};
