import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startWatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setRunning(true);
    }
  };

  const pauseWatch = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetWatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setRunning(false);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  useEffect(() => {
    const storedTime = localStorage.getItem("stopwatchtime");
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
    }
  }, []); 

  useEffect(() => {
  localStorage.setItem("stopwatchtime", time);
}, [time]);





  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      console.log("cleanup ");
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col bg-black text-white h-[100vh] w-[100vw] gap-8">
      <h1 className="text-5xl font-semibold">Stop Watch</h1>
      <div>
        <p className="text-xl font-semibold">{time} Seconds</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={startWatch}
          disabled={running}
          className="px-4 cursor-pointer py-2 bg-white text-black rounded-md hover:bg-gray-300"
        >
          Start
        </button>
        <button
          onClick={pauseWatch}
          disabled={!running}
          className="px-4 cursor-pointer py-2 bg-white text-black rounded-md hover:bg-gray-300"
        >
          Pause
        </button>
        <button
          onClick={resetWatch}
          className="px-4 cursor-pointer py-2 bg-white text-black rounded-md hover:bg-gray-300"
        >
          Reset
        </button>
        <button
          className="px-4 cursor-pointer py-2 bg-white text-black rounded-md hover:bg-gray-300"
          onClick={recordLap}
          disabled={!running}
        >
          Lap
        </button>
      </div>
      <div>
        <h2>Lap Times : </h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              Lap {index + 1}. {lap}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
