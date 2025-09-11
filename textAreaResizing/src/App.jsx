import React, { useRef } from 'react'

const App = () => {

  const textAreaRef = useRef(null);
  const handleInputChange = () => {
    const textArea= textAreaRef.current
    textArea.style.height= "auto";
    textArea.style.height = `${textArea.scrollHeight}px`
  }

  return (
    <div className='flex items-center justify-center flex-col gap-10 p-10'>
      <h1 className='text-4xl font-semibold' >Auto Resizing Text Area (using UseRef) </h1>
      <textarea name="" id="" className='border-1 border-black p-4 text-xl rounded-md w-[50vw]' onInput={handleInputChange} ref={textAreaRef} placeholder='Type something...'></textarea>
    </div>
  )
}

export default App