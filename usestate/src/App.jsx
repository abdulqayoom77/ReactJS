import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex align-middle flex-col gap-4 justify-center items-center h-screen bg-gray-200">
      <p className="text-center bg-gray-200 text-7xl">{count}</p>
      <button
        className="bg-gray-900 text-white rounded-sm px-4 py-2 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-gray-900 text-white rounded-sm px-4 py-2 cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        className="bg-gray-900 text-white rounded-sm px-4 py-2 cursor-pointer"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
