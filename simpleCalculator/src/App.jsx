import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  return (
    <div className='flex flex-col h-full w-full gap-5 justify-center items-center'>
      <input type="number" name="" id="" className='border-1 border-gray-900 rounded-md p-2' placeholder='Enter a Number' onChange={(e) => setNum1(Number(e.target.value))}/>
      <input type="number" name="" id="" className='border-1 border-gray-900 rounded-md p-2' placeholder='Enter a Number' onChange={(e) => setNum2(Number(e.target.value))}/>
      <button className='cursor-pointer bg-gray-900 hover:bg-gray-800 text-white w-auto px-4 py-2 rounded-md' onClick={() => setResult(num1+num2)}>Add</button>
      <button className='cursor-pointer bg-gray-900 hover:bg-gray-800 text-white w-auto px-4 py-2 rounded-md' onClick={() => setResult(num1-num2)}>Subtract</button>
      <button className='cursor-pointer bg-gray-900 hover:bg-gray-800 text-white w-auto px-4 py-2 rounded-md' onClick={() => setResult(num1*num2)}>Multiply</button>
      <h1 className='text-2xl font-semibold'>Result: {result ? result : 'No Result Yet'}</h1>
    </div>
  )
}

export default App 