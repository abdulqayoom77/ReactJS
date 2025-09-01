import React, { useState } from "react";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";
import FoodItems from "./components/FoodItems";
import EmptyMessage from "./components/EmptyMessage";

const App = () => {
  // const items = ["Apple", "mango", "banana"];
  let h1 = "Food Items List";
  const [items, setItems] = useState(["Apple", "mango", "banana"]);

  const onKeyDown = (e) => {
    if(e.key == "Enter"){
      setItems([...items, valFromInputComponent]);

    }
  }
 
  const getInputValue = (valFromInputComponent) => {
  };

  return (
    <Container>
      <Heading h1={h1} />
      <Input getInputValue={getInputValue} onKeyDown={onkeydown} />
      {items.length == 0 ? <EmptyMessage /> : <FoodItems items={items} />}
    </Container>
  );
};

export default App;
