// import React, { useRef } from "react";

// const App = () => {
//   const scrollRef = useRef(null);
//   const scrollToTop = () => {
//     scrollRef.current.scrollTo({ top: 0, behaviour: "smooth" });
//   };
//   return (
//     <div  ref={scrollRef} className="h-[100vh] overflow-y-scroll p-[20px]">
//       <div className="h-[300vh] p-[20px]">
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//         <button
//           style={{ position: "fixed", bottom: "20px" }}
//           onClick={scrollToTop}
//         >
//           Scroll to top
//         </button>
//       </div>
//       <div className="h-[200vh]">
//         abc
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-[300vh]">
      {visible && (
        <button
          onClick={scrollToTop}
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          ref={buttonRef}
        >
          Scroll To Top
        </button>
      )}
    </div>
  );
};

export default App;
