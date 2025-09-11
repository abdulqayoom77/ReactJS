import React, { useRef } from "react";

const App = () => {
  const scrollRef = useRef(null);
  const scrollToTop = () => {
    scrollRef.current.scrollTo({ top: 0, behaviour: "smooth" });
  };
  return (
    <div  ref={scrollRef} className="h-[100vh] overflow-y-scroll p-[20px]">
      <div className="h-[300vh] p-[20px]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button
          style={{ position: "fixed", bottom: "20px" }}
          onClick={scrollToTop}
        >
          Scroll to top
        </button>
      </div>
      <div className="h-[200vh]">
        abc
      </div>
    </div>
  );
};

export default App;
