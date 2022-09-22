import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
const TodoItem = ({id, text, removeItem}) => {
  return (
    <div className='flex drop-shadow-lg my-2'>
        <span className="counter flex-none px-5 my-auto">{id+1}</span>
        <span className="todo-text grow hrink-0 my-auto"><p className="h-8 w-8">{text}</p></span>
        <button className="delete flex-none bg-red-500 p-2" onClick={() => removeItem(id)}><TrashIcon className='h-8 w-8 text-white' /></button>
    </div>
  )
}

export default TodoItem