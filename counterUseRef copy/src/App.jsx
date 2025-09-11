import React, { useRef } from "react";

const App = () => {
  const countRef = useRef(0);
  const handleClick = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };
  return (
    <div>
      <h1>Click counter</h1>

      <button onClick={handleClick}>Click Me</button>
      <p>{countRef.current}</p>
    </div>
  );
};

export default App;
