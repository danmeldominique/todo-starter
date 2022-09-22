import React, { useState } from 'react'
import '../static/style.css'
import TodoItem from './TodoItem'
import { PlusIcon } from '@heroicons/react/24/outline'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [text, setText] = useState("")
  const [todoItems, setTodoItems] = useState([])

  const notify = () => {
    if (text.length > 0) {
      toast.success("Added to list", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      toast.error("There is no text in the box. Not adding to list...", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  const renderItems = () => {
    return todoItems.map(todo => {
      return (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} removeItem={removeItem} />
      )
    })
  }

  const addItem = (item) => {
    if (text.length > 0) {
      setText("")
      setTodoItems([...todoItems, item])  
    }   
    notify()
  }

  const removeItem = (id) => {
    setTodoItems(todoItems.filter(item => item.id !== id))
  }

  return (
<div className=' grid h-screen place-items-center'>
<div className='container mx-auto w-1/4'>
      <div className='text-center'>
        <p className='tag font-bold text-2xl'>Jot It!</p>
        <p className='sub-tag mb-5'>A basic todo app.</p>
      </div>
      <div className="text-center">
        <div className='flex mx-auto drop-shadow-md'>
          <input className='flex-auto' type="text" name="todo-input" id="todo-input" value={text} onChange={e => setText(e.target.value)} />
          <button className='bg-green-500 flex-none p-2' onClick={() => addItem({ id: todoItems.length, text: text })}><PlusIcon className='h-8 w-8 text-white' /></button>
        </div>
      </div>

      <div className="todo-items pt-5">
        {renderItems()}
      </div>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
    </div>
</div>

  )
}

export default App