import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task.trim() !== ""){
      setTasks([...tasks,task])
      setTask('')
    }
  };

  return (
    <div className="flex mt-10 flex-col justify-center gap-10 items-center">
      <div className="flex gap-5 ">
        <input
          type="text"
          value={task}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5"
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          onClick={() => addTask()}
        >
          Add Task
        </button>
      </div>
      <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside dark:text-gray-400 ">
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
