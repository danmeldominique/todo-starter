import React from 'react'

const TodoItem = ({id, text, removeItem}) => {
  return (
    <div className='flex'>
        <p className="counter">{id+1}</p>
        <p className="todo-text">{text}</p>
        <button className="delete" onClick={() => removeItem(id)}>Remove</button>
    </div>
  )
}

export default TodoItem