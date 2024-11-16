import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='bg-blue-300'>Todo Using Redux Tool Kit </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App