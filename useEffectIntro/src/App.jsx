// // import { useState } from "react";
// // import { useEffect } from "react";

// // const App = () => {
// //   const [weather, setWeather] = useState(null);

// //   useEffect(() => {
// //     async function fetchWeather() {
// //       const res = await fetch(
// //         "https://api.weatherapi.com/v1/current.json?key=c8f604caaf8c413a979115546251309&q=London"
// //       );
// //       const data = await res.json();
// //       setWeather(data);
// //     }
// //     fetchWeather();
// //   }, []);

// //   return (
// //     <div>
// //       {weather ? (
// //         <>
// //           <h2>Weather in : {weather.location.name}</h2>
// //           <p>Temperature : {weather.current.temp_c}°C</p>
// //           <p>Condition : {weather.current.condition.text}</p>
// //         </>
// //       ) : (
// //         <p>Loading weather...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [seconds, setSeconds] = useState(1)

// useEffect(() => {
//   const interval = setInterval(() => {
//     setSeconds(prev => prev + 1 )
//   }, 1000)
// return () => {
//   clearInterval(interval)
// }

// }, [])

//   return (
//     <div>
//       <h1>seconds: {seconds} </h1>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";

const App = () => {
  const [contentType, setContentType] = useState("posts");

  useEffect(() => {
    console.log("rendered ", contentType)
    return () => {
      console.log('removed sideeffect' , contentType);
    }
  }, [contentType]);

  return (
    <div className="p-20 flex justify-center flex-col items-center">
      <div className="flex gap-10 mb-10">
        <button
          className="bg-black text-white rounded-md px-4 py-2 cursor-pointer"
          onClick={() => setContentType("posts")}
        >
          Posts
        </button>
        <button
          className="bg-black text-white rounded-md px-4 py-2 cursor-pointer"
          onClick={() => setContentType("users")}
        >
          Users
        </button>
        <button
          className="bg-black text-white rounded-md px-4 py-2 cursor-pointer"
          onClick={() => setContentType("comments")}
        >
          Comments
        </button>
      </div>
      <div>
        <p className="capitalize">{contentType}</p>
      </div>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [windowSize, setWindowSize] = useState(window.innerWidth);

//   function resizeWindow() {
//     setWindowSize(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener("resize", resizeWindow);
//     return () => {
//       window.removeEventListener("resize", resizeWindow);
//     };
//   }, [windowSize]);

//   return <div>{windowSize}</div>;
// };

// export default App;
