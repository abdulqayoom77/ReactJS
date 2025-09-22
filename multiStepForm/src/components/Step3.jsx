import React from "react";
import useForm from "../hooks/useForm";

const Step3 = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <input
        value={state.data.password}
        onChange={(e) =>
          dispatch({ type: "UPDATE", field: "password", value: e.target.value })
        }
        className="rounded-md p-2 border-1 w-76"
        type="password"
        name=""
        placeholder="Enter Your Password"
        id="6"
      />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "BACK" })}
          className="px-4 py-2 bg-black text-white cursor-pointer rounded-md hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={() => alert("Form Submitted!")}
          className="px-4 py-2 bg-black text-white cursor-pointer rounded-md hover:bg-gray-800"
        >
          Sumbit
        </button>
      </div>
    </div>
  );
};

export default Step3;
