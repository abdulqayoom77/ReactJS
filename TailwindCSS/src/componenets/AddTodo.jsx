import React from "react";

const AddTodo = () => {
  return (
    <div className="flex justify-center mt-5 gap-2 ">
      <input
        type="text"
        className="border-1 rounded-sm p-2"
        placeholder="Enter Todo"
      />
      <input type="date" name="" id="" className="border-1 rounded-sm p-2" />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2 cursor-pointer rounded-sm">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
