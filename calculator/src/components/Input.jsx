const Input = ({value}) => {
  return (
    <input type="text" className="p-4 border-2 w-76 rounded-lg border-black focus:outline-2 focus:outline-offset-2 focus:outline-violet-500" readOnly placeholder="Enter Value to calculate" id="input" value={value} />
  );
};

export default Input;
