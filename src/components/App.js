import React, { useState } from 'react'
import '../static/style.css'
import TodoItem from './TodoItem'

const App = () => {
  const [text, setText] = useState("")
  const [todoItems, setTodoItems] = useState([])
  const [message, setMessage] = useState("")
  const renderItems = () => {
    return todoItems.map(todo => {
      return (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} removeItem={removeItem} />
      )
    })
  }

  const addItem = (item) => {
    if (text.length > 0 ) {
      setTodoItems([...todoItems,item])
      setText("")
    }
    else {
      setMessage("There is no text in the box. Not adding to list...")
    }
  }

  const removeItem = (id) => {
    setTodoItems(todoItems.filter(item => item.id !== id))
  }

  return (
    <div>
      <div>
        <input className='border-2 border-black' type="text" name="todo-input" id="todo-input" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => addItem({id: todoItems.length, text: text})}>Add</button>
        <p className="message">{message}</p>
      </div>

      <div className="todo-items">
        {renderItems()}
      </div>
    </div>

  )
}

export default App