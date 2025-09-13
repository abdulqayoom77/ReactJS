// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     async function fetchWeather() {
//       const res = await fetch(
//         "https://api.weatherapi.com/v1/current.json?key=c8f604caaf8c413a979115546251309&q=London"
//       );
//       const data = await res.json();
//       setWeather(data);
//     }
//     fetchWeather();
//   }, []);

  

//   return (
//     <div>
//       {weather ? (
//         <>
//           <h2>Weather in : {weather.location.name}</h2>
//           <p>Temperature : {weather.current.temp_c}°C</p>
//           <p>Condition : {weather.current.condition.text}</p>
//         </>
//       ) : (
//         <p>Loading weather...</p>
//       )}
//     </div>
//   );
// };

// export default App;





import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [seconds, setSeconds] = useState(1)

useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => prev + 1 )
  }, 1000)
return () => {
  clearInterval(interval)
}
  
}, [])


  return (
    <div>
      <h1>seconds: {seconds} </h1>
    </div>
  )
}

export default App