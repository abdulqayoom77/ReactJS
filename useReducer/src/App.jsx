// import React, { useReducer } from "react";

// const initialState = { count: 0 };
// const mainFunc = (state, action) => {
//   switch (action.whatToDo) {
//     case "increment":
//       return { count: state.count + action.num };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(mainFunc, initialState);

//   return (
//     <div>
//       <h2>Count: {state.count} </h2>
//       <button
//         className="px-4 py-2 cursor-pointer rounded-md bg-black text-white"
//         onClick={() => dispatch({ whatToDo: "increment", num: 5 })}
//       >
//         Increment
//       </button>
//       <button
//         className="px-4 py-2 cursor-pointer rounded-md bg-black text-white"
//         onClick={() => dispatch({ whatToDo: "decrement" })}
//       >
//         Decrement
//       </button>
//       <button
//         className="px-4 py-2 cursor-pointer rounded-md bg-black text-white"
//         onClick={() => dispatch({ whatToDo: "reset" })}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default App;

import React, { useReducer, useState } from "react";
const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  return (
    <div>
      <input className="border-1" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: text });
          setText("");
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "" }}
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              Toggle
            </button>
            <button
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
