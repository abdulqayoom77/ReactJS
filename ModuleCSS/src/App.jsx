import React from "react";
import List from "./components/List";
import Heading from "./components/Heading";
import EmptyMsg from "./components/EmptyMsg";
import Container from "./components/Container";

const App = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  // const fruits = [];
  return (
    <Container>
      <Heading />
      {fruits.length > 0 ? <List fruits={fruits} /> : <EmptyMsg />}
    </Container>
  );
};

export default App;
