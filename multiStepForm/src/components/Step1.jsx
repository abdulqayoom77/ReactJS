import useForm from "../hooks/useForm";

const Step1 = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <input
        onChange={(e) =>
          dispatch({ type: "UPDATE", field: "name", value: e.target.value })
        }
        className="rounded-md p-2 border-1 w-76"
        type="text"
        name=""
        placeholder="Enter Your Name"
        id="d"
      />
      <button
        onClick={() => dispatch({ type: "NEXT" })}
        className="px-4 py-2 bg-black text-white cursor-pointer rounded-md hover:bg-gray-800"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
