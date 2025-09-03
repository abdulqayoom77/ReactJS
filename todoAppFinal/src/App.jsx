import React, { useState } from "react";
import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoName, todoDate) => {
    console.log(todoName, todoDate);
    setTodoItems([...todoItems, { todoName, todoDate }]);
  };

  const handleDeleteItem = (todoName) => {
    const newTodoItemsList = todoItems.filter((item) => item.todoName !== todoName)
    setTodoItems(newTodoItemsList)
  }

  return (
    <center className="flex flex-col justify-center items-center">
      <Appname />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} deleteTodo={handleDeleteItem} />
    </center>
  );
};

export default App;
