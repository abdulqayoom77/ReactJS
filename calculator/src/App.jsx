import Heading from "./components/Heading";
import Conatiner from "./components/Conatiner";
import Para from "./components/Para";
import Input from "./components/Input";
import { Buttons } from "./components/Buttons";
import { useState } from "react";

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
    '.',
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
    "C-",
  ];
  const [inpValue, setInpValue] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      setInpValue(eval(inpValue).toString());
      return; // ⬅️ stop further execution
    }

    if (value === "C") {
      setInpValue("");
      return; // ⬅️ stop further execution
    }
    if (value === "C-") {
      setInpValue((prev) => prev.slice(0, -1));
      return; // ⬅️ stop further execution
    }

    // only append numbers and operators
    setInpValue((prev) => prev.toString() + value);
  };

  return (
    <Conatiner>
      <Conatiner>
        <Heading h1={"Calculator"} />
        <Para p={"Welcome to the Calculator App!"} />
        <Para p={"Use the buttons below to perform calculations."} />
      </Conatiner>
      <Input value={inpValue}></Input>
      <Buttons
        calculatorButtons={calculatorButtons}
        handleButtonClick={handleButtonClick}
      ></Buttons>
    </Conatiner>
  );
};

export default App;
