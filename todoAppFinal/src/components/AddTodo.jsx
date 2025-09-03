import React, { useState } from 'react'

const AddTodo = ({onNewItem}) => {

const [todoName, setTodoName] = useState('');
const [todoDate, setTodoDate] = useState('');

const handleTodoName = (event) => {
  setTodoName(event.target.value)
}
const handleTodoDate = (event) => {
  setTodoDate(event.target.value)
}

const handleAddButtonClicked = (event) => {
  if(todoName !== "" && todoDate !== ""){
    event.preventDefault()
    onNewItem(todoName, todoDate)
    setTodoName('')
    setTodoDate('')
  }else{
    alert("Please enter something")
  }
}

  return (
    <form  className='flex justify-center my-16 gap-10 items-center' onSubmit={handleAddButtonClicked} >
        <div>
            <input type="text" className='border-2 p-2 border-black rounded-md focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 w-80' placeholder='Enter Todo' onChange={handleTodoName} />
        </div>
        <div>
            <input type="date" name="" id="" className='border-2 p-2 border-black rounded-md focus:outline-2 focus:outline-blue-500 focus:outline-offset-2' onChange={handleTodoDate} />
        </div>
        <div>
            <button className='px-4 py-2 bg-black text-white rounded-sm hover:bg-gray-800 cursor-pointer' type='submit' >Add</button>
        </div>
    </form>
  )
}

export default AddTodo