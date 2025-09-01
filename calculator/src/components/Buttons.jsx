import React from "react";

export const Buttons = ({calculatorButtons, handleButtonClick}) => {
 

  return (
    <div className="grid grid-flow-col grid-rows-4 gap-4 mt-6">
      {calculatorButtons.map((button) => (
        <button key={button} className="bg-blue-400 px-7 hover:bg-blue-500 py-2 rounded cursor-pointer" onClick={() => handleButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};
