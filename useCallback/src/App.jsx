// import React, { useEffect, useMemo, useState } from "react";

import { useCallback, useState } from "react";
import List from "./List";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);
//   const doubleNumber = useMemo(() => {
//     return slowFunction(number);
//   }, [number]);

//   const themeStyles = useMemo(() => {
//     return {
//       backgroundColor: dark ? "black" : "white",
//       color: dark ? "white" : "black",
//     };
//   }, [dark]);

//   // const themeStyles = {
//   //   backgroundColor: dark ? "black" : "white",
//   //   color: dark ? "white" : "black",
//   // };

//   useEffect(() => {
//     console.log("Theme Changed");
//   }, [themeStyles]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark((prevDark) => !prevDark)}>
//         Toggle Theme
//       </button>
//       <div style={themeStyles}>{doubleNumber}</div>
//     </div>
//   );
// };

// export default App;
// function slowFunction(num) {
//   console.log("Calling Slow Function");
//   // for (let i = 0; i <= 1000000000; i++) {}
//   return num * 2;
// }

// *********************   UseCallback Example   *********************


// const App = () => {

//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const getItems = useCallback(() => {
//     return [number, number + 1, number + 2, number+3];
//   },[number]);

//   // Without useCallback, the function is recreated on every render
//   // const getItems = () => {
//   //   return [number, number + 1, number + 2];
//   // };

//   const theme = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark((prevDark) => !prevDark)}>
//         Toggle Theme
//       </button>
//       <div style={theme}>
//         <List getItems={getItems} />
//       </div>
//     </div>
//   )
// }

// export default App



// use call back slow function example
const App = () => {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  const getItems = useCallback(() => {
    return [slowFunction(number), slowFunction(number + 1), slowFunction(number + 2)];
  },[number]);

  // Without useCallback, the function is recreated on every render
  // const getItems = () => {
  //   return [slowFunction(number), number + 1, number + 2];
  // };

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={theme}>
        <List getItems={getItems} />
      </div>
    </div>
  )
}

export default App