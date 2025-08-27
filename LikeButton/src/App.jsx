import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setLikes(likes + 1)}
        className="h-10 text-5xl cursor-pointer"
      >
        👍{likes}
      </button>
    </div>
  );
};

export default App;
