import React from "react";
import ErrorMessage from "./ErrorMessage";

const TodoItems = () => {
  const todoList = [
    { id: 1, text: "Sample Todo", date: "01/01/2025" },
    { id: 2, text: "Another Todo", date: "01/04/2025" },
    { id: 3, text: "Third Todo", date: "01/05/2025" },
    { id: 4, text: "Fourth Todo", date: "01/06/2025" },
    { id: 5, text: "Fifth Todo", date: "01/07/2025" },
  ];
  return (
    <>
      {todoList.length === 0 && <ErrorMessage />}

      {todoList.map((todo) => (
        <li className="flex justify-center mt-5 gap-20 ">
          <span className="text-lg">{todo.text}</span>
          <span>{todo.date}</span>
          <div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-sm mr-2">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded-sm">
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoItems;
