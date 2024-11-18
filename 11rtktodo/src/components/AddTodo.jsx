import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice.js' 

// Functional component to add a new todo
function AddTodo() {
  
  // State to manage the input value for the new todo
  const [input, setInput] = useState('')
  
  // Create a dispatch function using useDispatch to dispatch actions
  const dispatch = useDispatch()

  // Handler for adding a new todo
  const addTodoHandler = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    dispatch(addTodo(input)) // Dispatch the addTodo action with the input value
    setInput('') // Clear the input field after adding the todo
  }

  return (
    // Form to handle adding a new todo
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* Input field for entering a new todo */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..." // Placeholder text for the input field
        value={input} // Bind the input value to the state
        onChange={(e) => setInput(e.target.value)} // Update state on input change
      />
      {/* Button to submit the form and add the todo */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
