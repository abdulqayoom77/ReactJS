import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState('')

  return (
    <div className='flex flex-col h-full w-full items-center gap-10'>
      <textarea name="" onChange={(e) => setText(e.target.value)} placeholder='Enter characters' rows={10} cols={40} id="" className='border-1 rounded-md resize-none p-3'></textarea>
      <h1 className='text-3xl font-semibold'>Character Count: {text.trim().length}</h1>
    </div>
  )
}

export default App