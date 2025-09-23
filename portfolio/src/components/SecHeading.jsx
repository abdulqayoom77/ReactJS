import React from "react";

const SecHeading = ({children}) => {
  return (
    <h1 className="text-2xl lg:text-4xl md:text-2xl font-bold bg-gradient-to-r from-[#535353] to-[#d3d3d3] bg-clip-text text-transparent bg-clip-text cursor-pointer overflow-y-hidden">
      {children}
    </h1>
  );
};

export default SecHeading;
