import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems, deleteTodo}) => {
  return (
    <div className='border-1 border-black rounded-md w-[40vw] h-auto p-10'>
        {
            todoItems.map((item) => (
                <TodoItem todoName={item.todoName} deleteTodo={deleteTodo} todoDate={item.todoDate} />
            ))
        }
    </div>
  )
}

export default TodoItems