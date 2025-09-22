import React from "react";
import useForm from "../hooks/useForm";

const Step2 = () => {


    const {state, dispatch} = useForm();


  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <input

        value={state.data.email}
        onChange={(e) =>
          dispatch({ type: "UPDATE", field: "email", value: e.target.value })
        }
        className="rounded-md p-2 border-1 w-76"
        type="email"
        name=""
        placeholder="Enter Your Email"
        id="f"
      />
      <div className="flex gap-4">
        <button onClick={() => dispatch({type : 'BACK'})} className="px-4 py-2 bg-black text-white cursor-pointer rounded-md hover:bg-gray-800">
          Back
        </button>
        <button onClick={() => dispatch({type:'NEXT'})} className="px-4 py-2 bg-black text-white cursor-pointer rounded-md hover:bg-gray-800">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
