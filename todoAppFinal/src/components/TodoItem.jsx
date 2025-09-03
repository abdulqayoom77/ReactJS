import React from 'react'

const TodoItem = ({todoName, todoDate , deleteTodo}) => {



  return (
    <div>
      <ul className='flex justify-center items-center'>
        <li className='flex  mb-5 gap-20 text-xl border-b-2 border-black'>
          <p>{todoName}</p>
          <p>{todoDate}</p>
          <button className='px-2 py-1 mb-4 bg-red-900 text-white rounded-sm hover:bg-red-800 cursor-pointer' onClick={() => deleteTodo(todoName)} >Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default TodoItem