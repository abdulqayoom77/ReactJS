import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <li className="text-left text-md border-1 p-4 w-76 mb-2 rounded-sm cursor-pointer" >{item}</li>
    </>
  );
};

export default Item;
