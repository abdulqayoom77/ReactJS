import React from 'react'
import { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null)
  const errorRef = useRef(null)

  const handleValidation = () => {
    const inputValue = inputRef.current.value;
    if(inputValue.trim() === ""){
      errorRef.current.style.display = 'block'
    }else{
      errorRef.current.style.display = ''
    }
  }
  console.log("object");

  return (
    <div>
      <h1>Input Validation (error message)</h1>
      <input ref={inputRef} type="text" placeholder='Type Something' />
      <div ref={errorRef} style={{color:'red', display: 'none'}} >Please Enter a Valid Input</div>
    </div>
  )
}

export default App