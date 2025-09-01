const Input = ({getInputValue, onKeyDown, value}) => {
  return (
    <input type="text" placeholder='Enter Food Item Name' className="p-3 border-1 border-black rounded-md w-76" onChange={(event)=> getInputValue(event.target.value)}  onKeyDown={(e) => onKeyDown(e)} value={value} />
  )
}

export default Input