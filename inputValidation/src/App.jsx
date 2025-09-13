import React, { useState } from "react";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);

  const handleValidation = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div>
      <h1>Input Validation (error message)</h1>
      <form onSubmit={handleValidation}>
        <input ref={inputRef} type="text" placeholder="Type Something" />
        {error && (
          <div style={{ color: "red"}}>
            Please Enter a Valid Input
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
